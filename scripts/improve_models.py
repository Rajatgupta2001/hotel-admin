#!/usr/bin/env python3
"""
Enhanced Model Generator with Proper TypeScript Practices
- Proper Date typing (not any)
- Clear documentation of defaults without enforcement
- Clean field parsing
- Proper optional/required field handling
"""

import os
import re
from pathlib import Path

class ImprovedModelGenerator:
    def __init__(self, models_dir, source_dir):
        self.models_dir = Path(models_dir)
        self.source_dir = Path(source_dir)
        
    def get_python_field_info(self, model_name):
        """Extract detailed field information from Python model"""
        python_file = self.source_dir / f"{model_name}.py"
        if not python_file.exists():
            return {}
            
        with open(python_file, 'r') as f:
            content = f.read()
            
        field_info = {}
        
        # Extract field definitions
        column_pattern = r'(\w+)\s*=\s*db\.Column\(([^)]+)\)'
        for match in re.finditer(column_pattern, content):
            field_name = match.group(1)
            column_def = match.group(0)
            
            # Determine field properties
            field_info[field_name] = {
                'nullable': 'nullable=False' not in column_def,
                'primary_key': 'primary_key=True' in column_def,
                'has_default': 'default=' in column_def,
                'auto_increment': 'autoincrement=True' in column_def,
                'is_datetime': 'DateTime' in column_def,
                'default_value': self.extract_default_value(column_def)
            }
            
        return field_info
    
    def extract_default_value(self, column_def):
        """Extract default value from column definition"""
        default_match = re.search(r'default=([^,)]+)', column_def)
        if default_match:
            default_val = default_match.group(1).strip()
            if default_val.isdigit():
                return int(default_val)
            elif default_val.startswith("'") and default_val.endswith("'"):
                return default_val[1:-1]
            elif 'get_current_utc_time' in default_val:
                return 'current_timestamp'
        return None
    
    def clean_and_parse_interface(self, interface_file):
        """Parse existing interface and clean it up"""
        with open(interface_file, 'r') as f:
            content = f.read()
            
        # Extract interface name
        interface_match = re.search(r'export interface (I\w+)', content)
        if not interface_match:
            return None
            
        interface_name = interface_match.group(1)
        model_name = interface_name[1:].lower()
        
        # Convert CamelCase to snake_case for Python lookup
        model_name = re.sub(r'([A-Z])', r'_\1', model_name).lower().strip('_')
        
        # Get Python field info
        python_info = self.get_python_field_info(model_name)
        
        # Extract current fields from TypeScript
        fields_section = re.search(r'export interface I\w+\s*\{([^}]+)\}', content, re.DOTALL)
        if not fields_section:
            return None
            
        fields = []
        for line in fields_section.group(1).split('\n'):
            line = line.strip()
            if not line or line.startswith('//') or line.startswith('/*'):
                continue
                
            # Clean parsing - remove artifacts
            if 'Default:' in line and '*/' in line:
                continue
                
            field_match = re.match(r'(\w+)(\??):\s*(\w+);?\s*(?://.*)?', line)
            if field_match:
                field_name = field_match.group(1)
                is_optional = field_match.group(2) == '?'
                field_type = field_match.group(3)
                
                # Get Python info for this field
                py_info = python_info.get(field_name, {})
                
                fields.append({
                    'name': field_name,
                    'type': field_type,
                    'optional': is_optional,
                    'python_info': py_info
                })
        
        return {
            'interface_name': interface_name,
            'model_name': model_name,
            'fields': fields,
            'python_info': python_info
        }
    
    def generate_enhanced_interface(self, parsed_info):
        """Generate properly structured TypeScript interface"""
        interface_name = parsed_info['interface_name']
        model_name = parsed_info['model_name']
        fields = parsed_info['fields']
        
        # Generate table name
        table_name = model_name.replace('_', '')
        
        content = f'''/**
 * {interface_name[1:]} Model
 * Database table: {table_name}
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface {interface_name} {{
'''
        
        # Add fields with proper typing and documentation
        for field in fields:
            py_info = field['python_info']
            field_name = field['name']
            
            # Determine proper TypeScript type
            ts_type = self.get_typescript_type(field['type'], py_info)
            
            # Determine if field should be optional
            is_optional = self.should_be_optional(field_name, py_info)
            optional_mark = '?' if is_optional else ''
            
            # Generate comment
            comment = self.generate_field_comment(field_name, py_info)
            
            content += f"  {field_name}{optional_mark}: {ts_type};{comment}\n"
        
        content += "}\n\n"
        
        # Generate Create interface
        content += self.generate_create_interface(interface_name, fields)
        content += "\n"
        
        # Generate Update interface
        content += self.generate_update_interface(interface_name, fields)
        
        return content
    
    def get_typescript_type(self, current_type, python_info):
        """Determine proper TypeScript type"""
        if python_info.get('is_datetime', False):
            return 'Date'
        
        # Map other types properly
        type_mapping = {
            'any': 'string',  # Conservative fallback
            'Date': 'Date',
            'number': 'number',
            'string': 'string',
            'boolean': 'boolean'
        }
        
        return type_mapping.get(current_type, current_type)
    
    def should_be_optional(self, field_name, python_info):
        """Determine if field should be optional in main interface"""
        # Always optional: primary keys, auto-generated timestamps
        if field_name == 'id' or python_info.get('primary_key', False):
            return True
            
        if field_name in ['createdon', 'modifiedon', 'servcdate']:
            return True
            
        # Optional if nullable in Python
        if python_info.get('nullable', True):
            return True
            
        # Optional if has default value
        if python_info.get('has_default', False):
            return True
            
        return False
    
    def generate_field_comment(self, field_name, python_info):
        """Generate appropriate comment for field"""
        if field_name == 'id' or python_info.get('primary_key', False):
            return "  // Primary key - auto-generated"
            
        if field_name in ['createdon', 'modifiedon']:
            return "  // Auto-populated timestamp"
            
        if field_name == 'servcdate':
            return "  // Service date - auto-populated"
            
        if field_name in ['createdby', 'modifiedby']:
            return "  // User ID reference"
            
        # Document defaults without enforcing them
        default_val = python_info.get('default_value')
        if default_val is not None:
            if default_val == 'current_timestamp':
                return "  // Default: current timestamp (backend)"
            else:
                return f"  // Default: {default_val} (backend)"
                
        if not python_info.get('nullable', True):
            return "  // Required"
            
        return ""
    
    def generate_create_interface(self, interface_name, fields):
        """Generate Create interface"""
        create_name = f"ICreate{interface_name[1:]}"
        content = f"export interface {create_name} {{\n"
        
        for field in fields:
            field_name = field['name']
            py_info = field['python_info']
            
            # Skip system-managed fields in Create
            if field_name in ['id', 'createdon', 'modifiedon', 'servcdate']:
                continue
                
            ts_type = self.get_typescript_type(field['type'], py_info)
            
            # Make most fields optional in Create (except truly required ones)
            is_optional = (
                py_info.get('nullable', True) or 
                py_info.get('has_default', False) or
                field_name in ['createdby', 'modifiedby']
            )
            
            optional_mark = '?' if is_optional else ''
            content += f"  {field_name}{optional_mark}: {ts_type};\n"
            
        content += "}"
        return content
    
    def generate_update_interface(self, interface_name, fields):
        """Generate Update interface"""
        update_name = f"IUpdate{interface_name[1:]}"
        content = f"export interface {update_name} {{\n"
        
        for field in fields:
            field_name = field['name']
            py_info = field['python_info']
            
            # Skip system-managed fields in Update
            if field_name in ['id', 'createdon', 'modifiedon', 'servcdate']:
                continue
                
            ts_type = self.get_typescript_type(field['type'], py_info)
            
            # All fields optional in Update
            content += f"  {field_name}?: {ts_type};\n"
            
        content += "}"
        return content
    
    def process_all_interfaces(self):
        """Process all interface files with improved structure"""
        interface_files = list(self.models_dir.glob("*.interface.ts"))
        
        print(f"Improving {len(interface_files)} interface files with proper TypeScript practices...")
        
        processed = 0
        errors = 0
        
        for interface_file in interface_files:
            try:
                print(f"Improving: {interface_file.name}")
                
                parsed_info = self.clean_and_parse_interface(interface_file)
                if not parsed_info:
                    print(f"  Skipped: Could not parse {interface_file.name}")
                    continue
                    
                enhanced_content = self.generate_enhanced_interface(parsed_info)
                
                # Write back the enhanced content
                with open(interface_file, 'w') as f:
                    f.write(enhanced_content)
                    
                processed += 1
                
            except Exception as e:
                print(f"Error processing {interface_file.name}: {str(e)}")
                errors += 1
                
        print(f"\nImprovement complete!")
        print(f"Successfully improved: {processed} files")
        print(f"Errors: {errors} files")
        
        return processed, errors

def main():
    models_dir = "/home/hotelogix/Desktop/md/angular-models"
    source_dir = "/home/hotelogix/Desktop/md/models (1)/models"
    
    generator = ImprovedModelGenerator(models_dir, source_dir)
    generator.process_all_interfaces()

if __name__ == "__main__":
    main()
