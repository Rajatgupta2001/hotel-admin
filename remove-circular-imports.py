#!/usr/bin/env python3

import os
import re
from pathlib import Path

def remove_circular_imports():
    """Remove circular imports from interface files"""
    models_dir = Path('./src/models')
    
    for file_path in models_dir.glob('*.interface.ts'):
        file_name = file_path.name
        interface_name = file_name.replace('.interface.ts', '').replace('_', '').replace('-', '')
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove import lines that import from the same file
            lines = content.split('\n')
            filtered_lines = []
            
            for line in lines:
                # Check if it's an import line that imports from the same file
                if line.strip().startswith('import') and f"from './{file_name.replace('.ts', '')}'" in line:
                    print(f"Removing circular import from {file_path}: {line.strip()}")
                    continue
                filtered_lines.append(line)
            
            # Write back if changes were made
            new_content = '\n'.join(filtered_lines)
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed circular imports in {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == '__main__':
    remove_circular_imports()
