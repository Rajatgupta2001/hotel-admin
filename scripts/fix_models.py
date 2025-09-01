#!/usr/bin/env python3
"""
Enhanced Model Structure Generator - Fixed Version
Updates all existing TypeScript interfaces to include Create and Update patterns
"""

import os
import re
from pathlib import Path

class ModelEnhancer:
    def __init__(self, models_dir):
        self.models_dir = Path(models_dir)
        
    def clean_field_type(self, field_type):
        """Clean up field type from parsing artifacts"""
        # Remove comments and artifacts
        field_type = re.sub(r'/\*.*?\*/', '', field_type)
        field_type = re.sub(r'//.*', '', field_type)
        field_type = re.sub(r'Default:.*', '', field_type)
        field_type = field_type.strip()
        
        # Fix common type issues
        if field_type == 'any':
            return 'Date'
        
        return field_type
    
    def generate_enhanced_interface(self, interface_file):
        """Generate enhanced interface with Create and Update patterns"""
        with open(interface_file, 'r') as f:
            content = f.read()
            
        # Extract interface name and fields
        interface_match = re.search(r'export interface (I\w+)\s*{([^}]+)}', content, re.DOTALL)
        if not interface_match:
            return content
            
        interface_name = interface_match.group(1)
        fields_block = interface_match.group(2)
        
        # Parse existing fields more carefully
        field_pattern = r'(\w+)(\??):\s*([^;]+);?\s*(?://[^\n]*)?'
        fields = []
        
        for line in fields_block.split('\n'):
            line = line.strip()
            if not line or line.startswith('//') or line.startswith('/*'):
                continue
                
            match = re.match(r'(\w+)(\??):\s*([^;]+);?\s*(?://.*)?', line)
            if match:
                field_name = match.group(1)
                is_optional = match.group(2) == '?'
                field_type = self.clean_field_type(match.group(3))
                
                fields.append({
                    'name': field_name,
                    'type': field_type,
                    'optional': is_optional,
                    'is_id': field_name == 'id',
                    'is_audit': field_name in ['createdon', 'modifiedon', 'servcdate', 'createdby', 'modifiedby']
                })
        
        if not fields:
            return content
            
        # Generate the enhanced content
        table_name = interface_name[1:].lower()
        
        enhanced_content = f'''/**
 * {interface_name[1:]} Model
 * Database table: {table_name}
 * Auto-generated from Python SQLAlchemy model
 */
export interface {interface_name} {{
'''
        
        # Add fields with proper comments
        for field in fields:
            comment = ""
            if field['is_id']:
                comment = "  // Primary key - auto-generated"
            elif field['name'] in ['createdon', 'modifiedon']:
                comment = "  // Auto-populated timestamp"
            elif field['name'] == 'servcdate':
                comment = "  // Service date"
            elif field['name'] in ['createdby', 'modifiedby']:
                comment = "  // User ID"
            elif not field['optional']:
                comment = "  // Required"
                
            optional_mark = '?' if field['optional'] else ''
            enhanced_content += f"  {field['name']}{optional_mark}: {field['type']};{comment}\n"
            
        enhanced_content += "}\n\n"
        
        # Generate Create interface
        create_interface_name = f"ICreate{interface_name[1:]}"
        enhanced_content += f"export interface {create_interface_name} {{\n"
        
        for field in fields:
            if field['is_id'] or field['name'] in ['createdon', 'modifiedon', 'servcdate']:
                continue
                
            # Make audit fields optional in Create
            if field['name'] in ['createdby', 'modifiedby']:
                enhanced_content += f"  {field['name']}?: {field['type']};\n"
            elif not field['optional']:
                enhanced_content += f"  {field['name']}: {field['type']};\n"
            else:
                enhanced_content += f"  {field['name']}?: {field['type']};\n"
                
        enhanced_content += "}\n\n"
        
        # Generate Update interface
        update_interface_name = f"IUpdate{interface_name[1:]}"
        enhanced_content += f"export interface {update_interface_name} {{\n"
        
        for field in fields:
            if field['is_id'] or field['name'] in ['createdon', 'modifiedon', 'servcdate']:
                continue
                
            # All fields optional in Update
            enhanced_content += f"  {field['name']}?: {field['type']};\n"
                
        enhanced_content += "}\n"
        
        return enhanced_content
    
    def process_all_interfaces(self):
        """Process all interface files"""
        interface_files = list(self.models_dir.glob("*.interface.ts"))
        
        print(f"Processing {len(interface_files)} interface files...")
        
        processed = 0
        errors = 0
        
        for interface_file in interface_files:
            try:
                print(f"Processing: {interface_file.name}")
                
                enhanced_content = self.generate_enhanced_interface(interface_file)
                
                # Write back the enhanced content
                with open(interface_file, 'w') as f:
                    f.write(enhanced_content)
                    
                processed += 1
                
            except Exception as e:
                print(f"Error processing {interface_file.name}: {str(e)}")
                errors += 1
                
        print(f"\nProcessing complete!")
        print(f"Successfully processed: {processed} files")
        print(f"Errors: {errors} files")
        
        return processed, errors

def main():
    models_dir = "/home/hotelogix/Desktop/md/angular-models"
    
    enhancer = ModelEnhancer(models_dir)
    enhancer.process_all_interfaces()

if __name__ == "__main__":
    main()
