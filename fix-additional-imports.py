#!/usr/bin/env python3

import re
import os
from pathlib import Path

# Define additional missing interfaces
ADDITIONAL_INTERFACES = {
    'ICorporates': 'corporates.interface',
    'IGuestsMaster': 'guests_master.interface', 
    'IAgents': 'agents.interface',
    'IContactInfoMaster': 'contact_info_master.interface',
    'IAddressMaster': 'address_master.interface',
    'IFilesMaster': 'files_master.interface',
    'IIdentificationTypes': 'identification_types.interface',
    'IidentityTypeCustomFields': 'identity_type_custom_fields.interface',
    'IGuestIdentityCustomField': 'guest_identity_custom_field.interface',
    'IHotels': 'hotels.interface',
    'IHotelSettings': 'hotel_settings.interface',
    'IHotelCustomSettings': 'hotel_custom_settings.interface'
}

def add_missing_imports_to_file(file_path, interfaces_to_add):
    """Add missing imports to a TypeScript interface file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find which interfaces are actually used in this file
        used_interfaces = []
        for interface in interfaces_to_add:
            if interface in content:
                used_interfaces.append(interface)
        
        if not used_interfaces:
            return False
        
        # Get existing imports
        lines = content.split('\n')
        
        # Find where to insert new imports (after existing imports)
        insert_index = 0
        for i, line in enumerate(lines):
            if line.strip().startswith('import') and 'from' in line:
                insert_index = i + 1
        
        # Create new import statements
        new_imports = []
        for interface in used_interfaces:
            import_file = interfaces_to_add[interface]
            import_statement = f"import type {{ {interface} }} from './{import_file}';"
            
            # Check if this import already exists
            already_exists = any(interface in line for line in lines if line.strip().startswith('import'))
            if not already_exists:
                new_imports.append(import_statement)
        
        if new_imports:
            # Insert new imports
            for i, new_import in enumerate(new_imports):
                lines.insert(insert_index + i, new_import)
            
            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(lines))
            
            print(f"Added {len(new_imports)} imports to {file_path}")
            return True
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False
    
    return False

def main():
    models_dir = Path('./src/models')
    
    if not models_dir.exists():
        print("Models directory not found!")
        return
    
    # Process all .interface.ts files
    interface_files = list(models_dir.glob('*.interface.ts'))
    
    processed_count = 0
    for file_path in interface_files:
        if add_missing_imports_to_file(file_path, ADDITIONAL_INTERFACES):
            processed_count += 1
    
    print(f"\nProcessed {processed_count} files with additional missing imports")

if __name__ == '__main__':
    main()
