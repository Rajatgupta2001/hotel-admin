#!/usr/bin/env python3
"""
Hotel Admin PWA Model Converter
Converts Python SQLAlchemy models to Angular TypeScript interfaces
Following the established patterns with IModelName, ICreateModelName, IUpdateModelName
"""

import os
import re
import sys
from pathlib import Path
from typing import Dict, List, Set, Optional

class HotelAdminModelConverter:
    def __init__(self, source_dir: str, target_dir: str):
        self.source_dir = Path(source_dir)
        self.target_dir = Path(target_dir)
        self.type_mapping = {
            'Integer': 'number',
            'String': 'string', 
            'Text': 'string',
            'DateTime': 'Date',
            'Date': 'Date',
            'Time': 'string',
            'DECIMAL': 'number',
            'CHAR': 'string',
            'Enum': 'string',
            'Boolean': 'boolean',
            'MEDIUMINT': 'number',
            'TINYINT': 'number',
            'BigInteger': 'number',
            'SmallInteger': 'number',
            'FLOAT': 'number',
            'Float': 'number',
            'BLOB': 'string',
            'LargeBinary': 'string',
            'JSON': 'any',
        }
        
    def snake_to_camel_case(self, snake_str: str) -> str:
        """Convert snake_case to camelCase"""
        components = snake_str.split('_')
        return components[0] + ''.join(word.capitalize() for word in components[1:])
    
    def snake_to_pascal_case(self, snake_str: str) -> str:
        """Convert snake_case to PascalCase"""
        return ''.join(word.capitalize() for word in snake_str.split('_'))
    
    def extract_column_info(self, line: str) -> Optional[Dict]:
        """Extract column information from db.Column definition"""
        line = line.strip()
        if '=' not in line or 'db.Column' not in line:
            return None
            
        # Extract field name
        field_match = re.match(r'(\w+)\s*=\s*', line)
        if not field_match:
            return None
            
        field_name = field_match.group(1)
        
        # Handle special column mappings like _id = db.Column('id', ...)
        if field_name.startswith('_') and 'Column(' in line:
            column_match = re.search(r"Column\(['\"](\w+)['\"]", line)
            if column_match:
                field_name = column_match.group(1)
        
        # Determine if nullable (default True unless explicitly False)
        nullable = 'nullable=False' not in line
        
        # Check if primary key
        is_primary_key = 'primary_key=True' in line
        
        # Check if has default
        has_default = 'default=' in line
        
        # Extract data type
        ts_type = self.extract_typescript_type(line)
        
        # Extract default value
        default_value = self.extract_default_value(line)
        
        return {
            'name': field_name,
            'type': ts_type,
            'nullable': nullable,
            'primary_key': is_primary_key,
            'has_default': has_default,
            'default': default_value,
            'is_audit': field_name in ['createdon', 'modifiedon', 'servcdate', 'createdby', 'modifiedby']
        }
    
    def extract_typescript_type(self, line: str) -> str:
        """Extract TypeScript type from SQLAlchemy column definition"""
        # Handle foreign keys
        if 'ForeignKey' in line:
            return 'number'
        
        # Map specific types with better patterns
        type_patterns = [
            (r'db\.String\(|String\(', 'string'),
            (r'db\.Text|Text\b', 'string'),
            (r'db\.Integer|Integer\b', 'number'),
            (r'db\.BigInteger|BigInteger\b', 'number'),
            (r'db\.SmallInteger|SmallInteger\b', 'number'),
            (r'MEDIUMINT|TINYINT', 'number'),
            (r'db\.DECIMAL|DECIMAL\(', 'number'),
            (r'db\.Float|Float\b|FLOAT\b', 'number'),
            (r'db\.DateTime|DateTime\b', 'Date'),
            (r'db\.Date|\.Date\b', 'Date'),
            (r'db\.Time|Time\b', 'string'),
            (r'db\.Boolean|Boolean\b', 'boolean'),
            (r'db\.CHAR|CHAR\(', 'string'),
            (r'Enum\(', 'string'),
            (r'JSON\b', 'any'),
            (r'BLOB|LargeBinary', 'string'),
        ]
        
        for pattern, ts_type in type_patterns:
            if re.search(pattern, line):
                return ts_type
        
        # Special handling for timestamp/datetime fields
        field_name_match = re.match(r'(\w+)\s*=', line)
        if field_name_match:
            field_name = field_name_match.group(1)
            if 'date' in field_name.lower() or field_name.endswith('on'):
                return 'Date'
                
        return 'string'  # Conservative fallback instead of any
    
    def extract_default_value(self, line: str) -> Optional[str]:
        """Extract default value from column definition"""
        if 'default=' in line:
            default_match = re.search(r'default=([^,)]+)', line)
            if default_match:
                return default_match.group(1).strip()
        return None
    
    def parse_python_model(self, file_path: Path) -> Optional[Dict]:
        """Parse Python model file and extract information"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except UnicodeDecodeError:
            print(f"  ⚠️  Skipping {file_path.name} - encoding issue")
            return None
        
        # Extract class name
        class_match = re.search(r'class\s+(\w+)\s*\(', content)
        if not class_match:
            print(f"  ⚠️  Skipping {file_path.name} - no class found")
            return None
            
        class_name = class_match.group(1)
        
        # Skip non-model classes
        if 'Base' in class_name or class_name in ['Model', 'BaseModel']:
            return None
        
        # Extract table name
        table_name = None
        table_match = re.search(r'__tablename__\s*=\s*["\']([^"\']+)["\']', content)
        if table_match:
            table_name = table_match.group(1)
        
        # Extract columns
        columns = []
        seen_fields = set()  # Track seen field names to avoid duplicates
        lines = content.split('\n')
        
        for line in lines:
            column_info = self.extract_column_info(line)
            if column_info:
                # Check for duplicate field names
                field_name = column_info['name']
                if field_name not in seen_fields:
                    columns.append(column_info)
                    seen_fields.add(field_name)
                else:
                    print(f"    ⚠️  Skipping duplicate field: {field_name}")
        
        if not columns:
            print(f"  ⚠️  Skipping {file_path.name} - no columns found")
            return None
        
        return {
            'class_name': class_name,
            'table_name': table_name,
            'columns': columns,
            'file_name': file_path.stem
        }
    
    def generate_interface_content(self, model_info: Dict) -> str:
        """Generate TypeScript interface content following hotel admin PWA patterns"""
        class_name = model_info['class_name']
        table_name = model_info['table_name'] or class_name.lower()
        columns = model_info['columns']
        
        # Generate interface names
        interface_name = f"I{class_name}"
        create_interface_name = f"ICreate{class_name}"
        update_interface_name = f"IUpdate{class_name}"
        
        content = f'''/**
 * {class_name} Model Interfaces
 * Database table: {table_name}
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface {interface_name} {{
'''
        
        # Add main interface fields
        for col in columns:
            field_name = self.snake_to_camel_case(col['name'])
            field_type = col['type']
            is_optional = col['nullable'] or col['primary_key'] or col['is_audit'] or col['has_default']
            optional_mark = '?' if is_optional else ''
            
            # Generate comment
            comment = self.generate_field_comment(col)
            
            content += f"  {field_name}{optional_mark}: {field_type};{comment}\n"
        
        content += "}\n\n"
        
        # Generate Create interface
        content += f'''// Create interface - for new entity creation
export interface {create_interface_name} {{
'''
        
        for col in columns:
            # Skip system-managed fields in Create
            if col['primary_key'] or col['name'] in ['createdon', 'modifiedon', 'servcdate']:
                continue
                
            field_name = self.snake_to_camel_case(col['name'])
            field_type = col['type']
            
            # Most fields optional in Create except truly required ones
            is_optional = (
                col['nullable'] or 
                col['has_default'] or
                col['name'] in ['createdby', 'modifiedby']
            )
            optional_mark = '?' if is_optional else ''
            
            content += f"  {field_name}{optional_mark}: {field_type};\n"
        
        content += "}\n\n"
        
        # Generate Update interface
        content += f'''// Update interface - for entity updates (all fields optional)
export interface {update_interface_name} {{
'''
        
        for col in columns:
            # Skip system-managed fields in Update
            if col['primary_key'] or col['name'] in ['createdon', 'modifiedon', 'servcdate']:
                continue
                
            field_name = self.snake_to_camel_case(col['name'])
            field_type = col['type']
            
            # All fields optional in Update
            content += f"  {field_name}?: {field_type};\n"
        
        content += "}\n"
        
        return content
    
    def generate_field_comment(self, col: Dict) -> str:
        """Generate appropriate comment for field"""
        if col['primary_key']:
            return "  // Primary key - auto-generated"
        
        if col['name'] in ['createdon', 'modifiedon']:
            return "  // Auto-populated timestamp"
        
        if col['name'] == 'servcdate':
            return "  // Service date"
        
        if col['name'] in ['createdby', 'modifiedby']:
            return "  // User ID reference"
        
        if col['default']:
            return f"  // Default: {col['default']}"
        
        if not col['nullable']:
            return "  // Required"
        
        return ""
    
    def convert_models(self, limit: Optional[int] = None) -> Dict:
        """Convert Python models to Angular TypeScript interfaces"""
        # Ensure target directory exists
        self.target_dir.mkdir(exist_ok=True)
        
        # Get all Python model files
        python_files = list(self.source_dir.glob("*.py"))
        python_files = [f for f in python_files if not f.name.startswith('__')]
        
        if limit:
            python_files = python_files[:limit]
        
        print(f"🔄 Converting {len(python_files)} Python model files to Angular interfaces...")
        
        converted = []
        skipped = []
        errors = []
        
        for file_path in python_files:
            try:
                print(f"📄 Processing {file_path.name}...")
                
                model_info = self.parse_python_model(file_path)
                if not model_info:
                    skipped.append(file_path.name)
                    continue
                
                # Generate TypeScript content
                ts_content = self.generate_interface_content(model_info)
                
                # Write to .interface.ts file
                output_filename = f"{model_info['file_name']}.interface.ts"
                output_path = self.target_dir / output_filename
                
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(ts_content)
                
                converted.append({
                    'file': output_filename,
                    'class_name': model_info['class_name'],
                    'interfaces': [
                        f"I{model_info['class_name']}",
                        f"ICreate{model_info['class_name']}",
                        f"IUpdate{model_info['class_name']}"
                    ]
                })
                
                print(f"  ✅ Created {output_filename}")
                
            except Exception as e:
                print(f"  ❌ Error processing {file_path.name}: {str(e)}")
                errors.append(f"{file_path.name}: {str(e)}")
        
        # Generate index.ts file
        self.generate_index_file(converted)
        
        return {
            'converted': converted,
            'skipped': skipped,
            'errors': errors
        }
    
    def generate_index_file(self, converted_models: List[Dict]):
        """Generate index.ts file with all exports"""
        if not converted_models:
            return
            
        content = '''/**
 * Hotel Admin PWA - Auto-generated Model Interfaces Index
 * 
 * This file exports all model interfaces following the pattern:
 * - IModelName: Main interface for complete entity
 * - ICreateModelName: Interface for entity creation
 * - IUpdateModelName: Interface for entity updates
 */

'''
        
        # Sort by interface name for better organization
        sorted_models = sorted(converted_models, key=lambda x: x['class_name'])
        
        # Add exports grouped by model
        for model in sorted_models:
            file_name = model['file'].replace('.interface.ts', '')
            interfaces = ', '.join(model['interfaces'])
            content += f"export type {{ {interfaces} }} from './{file_name}.interface';\n"
        
        # Write index file
        index_path = self.target_dir / 'index.ts'
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Generated index.ts with {len(converted_models)} model exports")

def main():
    # Configuration
    source_dir = "/home/hotelogix/Desktop/models"
    target_dir = "/home/hotelogix/Desktop/hotel-admin-pwa/src/models/generated"
    
    # Get command line arguments
    limit = None
    if len(sys.argv) > 1:
        try:
            limit = int(sys.argv[1])
            print(f"🔢 Limiting conversion to first {limit} models")
        except ValueError:
            print("⚠️  Invalid limit argument, processing all models")
    
    # Create converter and run conversion
    converter = HotelAdminModelConverter(source_dir, target_dir)
    results = converter.convert_models(limit)
    
    # Print summary
    print(f"""
📊 Conversion Summary:
   ✅ Converted: {len(results['converted'])} models
   ⏭️  Skipped: {len(results['skipped'])} models
   ❌ Errors: {len(results['errors'])} models
   
📁 Output directory: {target_dir}
📄 Generated files: {len(results['converted']) + 1} (including index.ts)
""")
    
    if results['errors']:
        print("❌ Errors encountered:")
        for error in results['errors']:
            print(f"   {error}")

if __name__ == "__main__":
    main()
