#!/bin/bash

echo "Fixing component class names with hyphens..."

# Find all component files and fix hyphenated class names
find /home/hotelogix/Desktop/hotel-admin-pwa/src/app/pages -name "*.component.ts" -type f | while read -r file; do
    # Check if the file contains a class with hyphens
    if grep -q "export class.*-.*Component" "$file"; then
        echo "Fixing: $file"
        
        # Extract the filename without extension and path
        filename=$(basename "$file" .component.ts)
        
        # Convert kebab-case to PascalCase
        # Split by hyphens and capitalize each part
        class_name=""
        IFS='-' read -ra PARTS <<< "$filename"
        for part in "${PARTS[@]}"; do
            # Capitalize first letter of each part
            class_name+="$(echo "$part" | sed 's/^./\U&/')"
        done
        class_name+="Component"
        
        echo "  Setting class name to: $class_name"
        
        # Replace the incorrect class name with the correct one
        sed -i "s/export class .*-.*Component {/export class ${class_name} {/" "$file"
    fi
done

echo "Component class name fixes completed!"
