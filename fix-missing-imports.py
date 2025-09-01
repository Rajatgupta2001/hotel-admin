#!/usr/bin/env python3

import re
import os
from pathlib import Path

# Define the missing interfaces and their corresponding files
MISSING_INTERFACES = {
    'IRsvPmntDetails': 'rsv_pmnt_details.interface',
    'ITaxMaster': 'tax_master.interface',
    'IRsvRmTasks': 'rsv_rm_tasks.interface',
    'IRsvRooms': 'rsv_rooms.interface',
    'IRsvRmGuest': 'rsv_rm_guests.interface',
    'IRsvRmTariff': 'rsv_rm_tariff.interface',
    'IRsvRmTariffRates': 'rsv_rm_tariff_rates.interface',
    'IRsvRmTariffInclusions': 'rsv_rm_tariff_inclusions.interface',
    'IRsvRmSplitDetails': 'rsv_rm_split_details.interface',
    'IHkRmStatus': 'hk_rm_status.interface',
    'IRoomTypes': 'room_types.interface',
    'IRooms': 'rooms.interface',
    'IPayTypes': 'pay_types.interface',
    'IReservation': 'reservations.interface',
    'ITaxSlabs': 'tax_slabs.interface',
    'IRmApplicableTaxes': 'rm_applicable_taxes.interface',
    'IPosProdTaxes': 'pos_prod_taxes.interface'
}

def get_existing_imports(content):
    """Extract existing imports from a file"""
    import_lines = []
    lines = content.split('\n')
    
    for line in lines:
        if line.strip().startswith('import') and 'from' in line:
            import_lines.append(line.strip())
        elif not line.strip() or line.strip().startswith('//'):
            continue
        else:
            break
    
    return import_lines

def add_missing_imports(file_path, missing_interfaces):
    """Add missing imports to a TypeScript interface file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find which interfaces are actually used in this file
        used_interfaces = []
        for interface in missing_interfaces:
            if interface in content:
                used_interfaces.append(interface)
        
        if not used_interfaces:
            return False
        
        # Get existing imports
        existing_imports = get_existing_imports(content)
        
        # Find where to insert new imports
        lines = content.split('\n')
        insert_index = 0
        
        # Find the last import statement
        for i, line in enumerate(lines):
            if line.strip().startswith('import') and 'from' in line:
                insert_index = i + 1
        
        # Create new import statements
        new_imports = []
        for interface in used_interfaces:
            import_file = missing_interfaces[interface]
            import_statement = f"import type {{ {interface} }} from './{import_file}';"
            
            # Check if this import already exists
            already_exists = any(interface in existing for existing in existing_imports)
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
        if add_missing_imports(file_path, MISSING_INTERFACES):
            processed_count += 1
    
    print(f"\nProcessed {processed_count} files with missing imports")

if __name__ == '__main__':
    main()
