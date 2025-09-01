#!/usr/bin/env python3
"""
Script to convert Python SQLAlchemy models to Angular TypeScript interfaces
"""

import os
import re
import ast
from typing import Dict, List, Set, Tuple, Optional


class ModelConverter:
    def __init__(self, source_dir: str, target_dir: str):
        self.source_dir = source_dir
        self.target_dir = target_dir
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
        self.processed_models: Set[str] = set()
        self.model_relationships: Dict[str, List[str]] = {}
        
    def convert_python_to_camel_case(self, snake_str: str) -> str:
        """Convert snake_case to camelCase"""
        components = snake_str.split('_')
        return components[0] + ''.join(word.capitalize() for word in components[1:])
    
    def convert_class_name_to_interface(self, class_name: str) -> str:
        """Convert Python class name to TypeScript interface name"""
        return f"I{class_name}"
    
    def extract_column_info(self, line: str) -> Optional[Dict]:
        """Extract column information from a db.Column definition"""
        # Remove leading/trailing whitespace and comments
        line = line.strip()
        if '=' not in line or 'db.Column' not in line:
            return None
            
        # Extract field name
        field_match = re.match(r'(\w+)\s*=\s*', line)
        if not field_match:
            return None
            
        field_name = field_match.group(1)
        
        # Skip special columns that are mapped differently
        if field_name.startswith('_') and 'Column(' in line:
            # Handle special column mappings like _id = db.Column('id', ...)
            column_match = re.search(r"Column\(['\"](\w+)['\"]", line)
            if column_match:
                field_name = column_match.group(1)
        
        # Determine if nullable
        nullable = 'nullable=False' not in line
        
        # Extract data type
        type_info = self.extract_type_from_column(line)
        
        # Extract default value
        default_value = self.extract_default_value(line)
        
        return {
            'name': field_name,
            'type': type_info,
            'nullable': nullable,
            'default': default_value
        }
    
    def extract_type_from_column(self, line: str) -> str:
        """Extract TypeScript type from SQLAlchemy column definition"""
        # Handle special cases first
        if 'ForeignKey' in line:
            return 'number'  # Foreign keys are typically numbers
        
        # Look for specific type patterns
        if 'db.String(' in line or 'String(' in line:
            return 'string'
        elif 'db.Text' in line or 'Text' in line:
            return 'string'
        elif 'db.Integer' in line or 'Integer' in line:
            return 'number'
        elif 'db.BigInteger' in line or 'BigInteger' in line:
            return 'number'
        elif 'db.SmallInteger' in line or 'SmallInteger' in line:
            return 'number'
        elif 'MEDIUMINT' in line or 'TINYINT' in line:
            return 'number'
        elif 'db.DECIMAL' in line or 'DECIMAL' in line:
            return 'number'
        elif 'db.Float' in line or 'Float' in line or 'FLOAT' in line:
            return 'number'
        elif 'db.DateTime' in line or 'DateTime' in line:
            return 'Date'
        elif 'db.Date' in line or '.Date' in line:
            return 'Date'
        elif 'db.Time' in line or 'Time' in line:
            return 'string'
        elif 'db.Boolean' in line or 'Boolean' in line:
            return 'boolean'
        elif 'db.CHAR' in line or 'CHAR(' in line:
            return 'string'
        elif 'Enum(' in line:
            return 'string'  # We'll handle enum values separately
        elif 'JSON' in line:
            return 'any'
        elif 'BLOB' in line or 'LargeBinary' in line:
            return 'string'
        
        # Look for db.XXXX or sqlalchemy types as fallback
        type_patterns = [
            r'db\.(\w+)',
            r'Column\((?:db\.)?(\w+)',
            r'sqlalchemy\.(\w+)',
        ]
        
        for pattern in type_patterns:
            match = re.search(pattern, line)
            if match:
                python_type = match.group(1)
                if python_type in self.type_mapping:
                    return self.type_mapping[python_type]
        
        return 'any'
    
    def extract_default_value(self, line: str) -> Optional[str]:
        """Extract default value from column definition"""
        if 'default=' in line:
            default_match = re.search(r'default=([^,)]+)', line)
            if default_match:
                return default_match.group(1).strip()
        return None
    
    def extract_relationships(self, content: str) -> List[Dict]:
        """Extract relationship information from model content"""
        relationships = []
        lines = content.split('\n')
        
        for line in lines:
            line = line.strip()
            if 'relationship(' in line and not line.startswith('#'):
                rel_match = re.match(r'(\w+)\s*=\s*(?:db\.)?relationship\(["\'](\w+)["\']', line)
                if rel_match:
                    field_name = rel_match.group(1)
                    related_model = rel_match.group(2)
                    relationships.append({
                        'name': field_name,
                        'model': related_model,
                        'type': f'I{related_model}[]' if 'back_populates' in line else f'I{related_model}'
                    })
        
        return relationships
    
    def extract_enums(self, content: str) -> List[Dict]:
        """Extract enum definitions from model content"""
        enums = []
        lines = content.split('\n')
        
        for line in lines:
            line = line.strip()
            if line.startswith(('STATUS_', 'TYPE_')) and '=' in line:
                enum_match = re.match(r'(\w+)\s*=\s*["\']([^"\']+)["\']', line)
                if enum_match:
                    enums.append({
                        'name': enum_match.group(1),
                        'value': enum_match.group(2)
                    })
        
        return enums
    
    def parse_python_model(self, file_path: str) -> Dict:
        """Parse a Python model file and extract model information"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract class name
        class_match = re.search(r'class\s+(\w+)\s*\(', content)
        if not class_match:
            return None
            
        class_name = class_match.group(1)
        table_name = None
        
        # Extract table name
        table_match = re.search(r'__tablename__\s*=\s*["\']([^"\']+)["\']', content)
        if table_match:
            table_name = table_match.group(1)
        
        # Extract columns
        lines = content.split('\n')
        columns = []
        
        for line in lines:
            column_info = self.extract_column_info(line)
            if column_info:
                columns.append(column_info)
        
        # Extract relationships
        relationships = self.extract_relationships(content)
        
        # Extract enums
        enums = self.extract_enums(content)
        
        return {
            'class_name': class_name,
            'table_name': table_name,
            'columns': columns,
            'relationships': relationships,
            'enums': enums
        }
    
    def generate_typescript_interface(self, model_info: Dict) -> str:
        """Generate TypeScript interface from model information"""
        if not model_info:
            return ""
            
        class_name = model_info['class_name']
        interface_name = self.convert_class_name_to_interface(class_name)
        
        # Start building the interface
        lines = []
        
        # Add enums if any
        for enum in model_info['enums']:
            lines.append(f"export const {enum['name']} = '{enum['value']}';")
        
        if model_info['enums']:
            lines.append("")
        
        # Start interface definition
        lines.append(f"export interface {interface_name} {{")
        
        # Add columns
        for column in model_info['columns']:
            field_name = self.convert_python_to_camel_case(column['name'])
            field_type = column['type']
            optional = '?' if column['nullable'] else ''
            
            # Add JSDoc comment if there's a default value
            if column['default']:
                lines.append(f"  /** Default: {column['default']} */")
            
            lines.append(f"  {field_name}{optional}: {field_type};")
        
        # Add relationships
        for relationship in model_info['relationships']:
            field_name = self.convert_python_to_camel_case(relationship['name'])
            field_type = relationship['type']
            lines.append(f"  {field_name}?: {field_type};")
        
        lines.append("}")
        
        return '\n'.join(lines)
    
    def get_all_python_files(self) -> List[str]:
        """Get all Python model files from source directory"""
        python_files = []
        for file in os.listdir(self.source_dir):
            if file.endswith('.py') and file != '__init__.py' and not file.startswith('_'):
                python_files.append(os.path.join(self.source_dir, file))
        return python_files
    
    def convert_all_models(self):
        """Convert all Python models to TypeScript interfaces"""
        if not os.path.exists(self.target_dir):
            os.makedirs(self.target_dir)
        
        python_files = self.get_all_python_files()
        converted_models = []
        
        print(f"Found {len(python_files)} Python model files to convert...")
        
        for file_path in python_files:
            print(f"Converting {os.path.basename(file_path)}...")
            
            try:
                model_info = self.parse_python_model(file_path)
                if model_info:
                    typescript_content = self.generate_typescript_interface(model_info)
                    
                    # Generate output filename
                    base_name = os.path.basename(file_path).replace('.py', '')
                    ts_filename = f"{base_name}.interface.ts"
                    ts_file_path = os.path.join(self.target_dir, ts_filename)
                    
                    # Write TypeScript file
                    with open(ts_file_path, 'w', encoding='utf-8') as f:
                        f.write(typescript_content)
                    
                    converted_models.append({
                        'filename': ts_filename,
                        'interface_name': self.convert_class_name_to_interface(model_info['class_name']),
                        'class_name': model_info['class_name']
                    })
                    
                    print(f"  ✓ Created {ts_filename}")
                else:
                    print(f"  ✗ Failed to parse {os.path.basename(file_path)}")
                    
            except Exception as e:
                print(f"  ✗ Error converting {os.path.basename(file_path)}: {str(e)}")
        
        # Generate index.ts file
        self.generate_index_file(converted_models)
        
        print(f"\nConversion complete! Generated {len(converted_models)} TypeScript interfaces.")
        return converted_models
    
    def generate_index_file(self, converted_models: List[Dict]):
        """Generate index.ts file that exports all interfaces"""
        lines = []
        lines.append("// Auto-generated index file for all model interfaces")
        lines.append("")
        
        # Add exports
        for model in sorted(converted_models, key=lambda x: x['filename']):
            module_name = model['filename'].replace('.interface.ts', '')
            interface_name = model['interface_name']
            lines.append(f"export {{ {interface_name} }} from './{module_name}.interface';")
        
        lines.append("")
        lines.append("// Export all interface names for convenience")
        lines.append("export const MODEL_INTERFACES = [")
        for model in sorted(converted_models, key=lambda x: x['interface_name']):
            lines.append(f"  '{model['interface_name']}',")
        lines.append("];")
        
        index_path = os.path.join(self.target_dir, 'index.ts')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(lines))
        
        print(f"✓ Created index.ts with {len(converted_models)} exports")


def main():
    # Configuration
    source_dir = "/home/hotelogix/Desktop/md/models (1)/models"
    target_dir = "/home/hotelogix/Desktop/md/angular-models"
    
    # Create converter and run conversion
    converter = ModelConverter(source_dir, target_dir)
    converter.convert_all_models()


if __name__ == "__main__":
    main()
