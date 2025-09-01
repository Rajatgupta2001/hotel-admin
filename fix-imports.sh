#!/bin/bash

# Fix missing imports in Angular model files

# Function to add import to a file if it doesn't exist
add_import() {
    local file="$1"
    local interface="$2"
    local import_file="$3"
    
    # Check if import already exists
    if ! grep -q "import.*${interface}" "$file"; then
        # Find the last import line or the first export line
        if grep -q "^import" "$file"; then
            # Add after last import
            sed -i "/^import.*from/a import { ${interface} } from './${import_file}.interface';" "$file"
        else
            # Add before first export
            sed -i "/^export/i import { ${interface} } from './${import_file}.interface';" "$file"
        fi
    fi
}

# Function to add imports at the beginning of a file
add_imports_at_beginning() {
    local file="$1"
    shift
    local imports=("$@")
    
    # Create a temporary file with imports
    temp_file=$(mktemp)
    
    # Add the comment header
    grep "^/\*\*" "$file" -A 10 | head -8 > "$temp_file"
    
    # Add the imports
    for import_line in "${imports[@]}"; do
        echo "$import_line" >> "$temp_file"
    done
    
    # Add empty line
    echo "" >> "$temp_file"
    
    # Add the rest of the file (skip the header)
    tail -n +9 "$file" >> "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
}

# Fix specific files
echo "Fixing agents.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/agents.interface.ts" \
    "import { IContactInfoMaster } from './contact_info_master.interface';" \
    "import { IAddressMaster } from './address_master.interface';" \
    "import { IFilesMaster } from './files_master.interface';"

echo "Fixing guests_master.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/guests_master.interface.ts" \
    "import { IContactInfoMaster } from './contact_info_master.interface';" \
    "import { IAddressMaster } from './address_master.interface';" \
    "import { IFilesMaster } from './files_master.interface';"

echo "Fixing corporates.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/corporates.interface.ts" \
    "import { IContactInfoMaster } from './contact_info_master.interface';" \
    "import { IAddressMaster } from './address_master.interface';" \
    "import { IFilesMaster } from './files_master.interface';"

echo "Fixing room_types.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/room_types.interface.ts" \
    "import { IRsvRooms } from './rsv_rooms.interface';" \
    "import { IRooms } from './rooms.interface';"

echo "Fixing rooms.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/rooms.interface.ts" \
    "import { IRsvRooms } from './rsv_rooms.interface';" \
    "import { IHkRmStatus } from './hk_rm_status.interface';" \
    "import { IRoomTypes } from './room_types.interface';"

echo "Fixing rsv_rooms.interface.ts..."
add_imports_at_beginning "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/models/rsv_rooms.interface.ts" \
    "import { IReservation } from './reservation.interface';" \
    "import { IRooms } from './rooms.interface';" \
    "import { IRoomTypes } from './room_types.interface';"

echo "Done!"
