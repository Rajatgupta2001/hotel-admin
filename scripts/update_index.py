#!/usr/bin/env python3
"""
Update Index File with all Create and Update interfaces
"""

import os
import re
from pathlib import Path

def update_index_file():
    models_dir = Path("/home/hotelogix/Desktop/md/angular-models")
    index_file = models_dir / "index.ts"
    
    # Get all interface files
    interface_files = list(models_dir.glob("*.interface.ts"))
    
    # Extract all interface names
    all_interfaces = []
    
    for file in interface_files:
        with open(file, 'r') as f:
            content = f.read()
            
        # Find all interface declarations
        interface_matches = re.findall(r'export interface (I\w+)', content)
        for interface_name in interface_matches:
            all_interfaces.append({
                'name': interface_name,
                'file': file.stem  # Remove .interface.ts
            })
    
    # Sort interfaces
    all_interfaces.sort(key=lambda x: x['name'])
    
    # Generate new index content
    index_content = "/**\n"
    index_content += " * Auto-generated index file for all Angular models\n"
    index_content += f" * Total interfaces: {len(all_interfaces)}\n"
    index_content += " * Includes main interfaces, Create interfaces, and Update interfaces\n"
    index_content += " */\n\n"
    
    # Group exports by file
    files_map = {}
    for interface in all_interfaces:
        file_name = interface['file']
        if file_name not in files_map:
            files_map[file_name] = []
        files_map[file_name].append(interface['name'])
    
    # Generate exports
    for file_name in sorted(files_map.keys()):
        interfaces = files_map[file_name]
        interface_list = ', '.join(interfaces)
        index_content += f"export {{ {interface_list} }} from './{file_name}';\n"
    
    # Add utility exports
    index_content += "\n// Utility exports\n"
    index_content += "export * from './model-utils';\n"
    
    # Write the updated index file
    with open(index_file, 'w') as f:
        f.write(index_content)
    
    print(f"Updated index.ts with {len(all_interfaces)} interfaces from {len(files_map)} files")
    return len(all_interfaces)

if __name__ == "__main__":
    update_index_file()
