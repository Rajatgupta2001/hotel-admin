#!/bin/bash

# Function to convert kebab-case to PascalCase
kebab_to_pascal() {
    echo "$1" | sed -r 's/(^|-)([a-z])/\U\2/g'
}

# Find all component files and fix the class names
find /home/hotelogix/Desktop/hotel-admin-pwa/src/app/pages -name "*.component.ts" -type f | while read -r file; do
    # Get the component name from the filename
    filename=$(basename "$file" .component.ts)
    
    # Convert to PascalCase
    class_name=$(kebab_to_pascal "$filename")Component
    
    # Check if the file contains an incorrect class name with hyphens
    if grep -q "export class.*-.*Component" "$file"; then
        echo "Fixing class name in: $file"
        echo "  Setting class name to: $class_name"
        
        # Replace the incorrect class name with the correct one
        sed -i "s/export class .*Component {/export class ${class_name} {/" "$file"
    fi
done

echo "All component class names have been fixed!"
