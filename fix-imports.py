#!/usr/bin/env python3
"""
Fix Angular Model Imports
This script analyzes the model files and automatically adds missing imports.
"""

import os
import re
import glob

def get_interface_file_map():
    """Create a mapping of interface names to their file names."""
    model_dir = "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models"
    interface_map = {}
    
    # Scan all interface files
    for file_path in glob.glob(f"{model_dir}/*.interface.ts"):
        file_name = os.path.basename(file_path)
        base_name = file_name.replace('.interface.ts', '')
        
        with open(file_path, 'r') as f:
            content = f.read()
            # Find all interface definitions
            interface_matches = re.findall(r'export interface (I[A-Z]\w*)', content)
            for interface in interface_matches:
                interface_map[interface] = base_name
    
    return interface_map

def find_missing_imports(file_path, interface_map):
    """Find missing imports in a file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Find all interface usages
    used_interfaces = set(re.findall(r'\b(I[A-Z]\w*)\b', content))
    
    # Find existing imports
    imported_interfaces = set()
    import_matches = re.findall(r'import.*?\{([^}]+)\}.*?from', content)
    for match in import_matches:
        interfaces = [i.strip() for i in match.split(',')]
        imported_interfaces.update(interfaces)
    
    # Find interfaces defined in this file
    defined_interfaces = set(re.findall(r'export interface (I[A-Z]\w*)', content))
    
    # Find missing imports
    missing = used_interfaces - imported_interfaces - defined_interfaces
    
    # Filter out interfaces that don't exist in our mapping
    missing = {interface for interface in missing if interface in interface_map}
    
    return missing

def add_imports_to_file(file_path, missing_imports, interface_map):
    """Add missing imports to a file."""
    if not missing_imports:
        return
    
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    # Find the insertion point (after comments, before first export)
    insertion_index = 0
    for i, line in enumerate(lines):
        if line.strip().startswith('export'):
            insertion_index = i
            break
        elif line.strip().startswith('import'):
            insertion_index = i + 1
    
    # Create import lines
    import_lines = []
    for interface in sorted(missing_imports):
        file_name = interface_map[interface]
        import_line = f"import {{ {interface} }} from './{file_name}.interface';\n"
        import_lines.append(import_line)
    
    # Insert imports
    lines[insertion_index:insertion_index] = import_lines
    
    # Write back to file
    with open(file_path, 'w') as f:
        f.writelines(lines)
    
    print(f"Added {len(missing_imports)} imports to {os.path.basename(file_path)}")

def main():
    model_dir = "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models"
    
    print("Building interface mapping...")
    interface_map = get_interface_file_map()
    print(f"Found {len(interface_map)} interfaces")
    
    print("\nProcessing model files...")
    for file_path in glob.glob(f"{model_dir}/*.interface.ts"):
        file_name = os.path.basename(file_path)
        missing = find_missing_imports(file_path, interface_map)
        if missing:
            add_imports_to_file(file_path, missing, interface_map)
    
    print("\nDone!")

if __name__ == "__main__":
    main()
