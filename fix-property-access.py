#!/usr/bin/env python3

import re
import os
from pathlib import Path

def fix_property_access_issues():
    """Fix property access issues in storage service"""
    file_path = Path('./src/services/storage.service.ts')
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix all property access issues with bracket notation
        fixes = [
            # Hotel ID access
            (r'hotel\.id', "hotel['id']"),
            (r'data\.hotel\?\.id', "data.hotel?.['id']"),
            
            # RoomType ID access
            (r'roomType\.id', "roomType['id']"),
            (r'r\.id', "r['id']"),
            
            # Room ID access  
            (r'room\.id', "room['id']"),
            
            # RatePlan ID access
            (r'ratePlan\.id', "ratePlan['id']"),
            (r'rp\.id', "rp['id']"),
            
            # Tax ID access
            (r'tax\.id', "tax['id']"),
            (r't\.id', "t['id']"),
            
            # Amenity ID access
            (r'amenity\.id', "amenity['id']"),
            (r'a\.id', "a['id']"),
            
            # User ID access
            (r'user\.id', "user['id']"),
            (r'u\.id', "u['id']"),
            
            # Hotel name access
            (r'data\.hotel\?\.hotelname', "data.hotel?.['hotelname']"),
        ]
        
        # Apply all fixes
        for pattern, replacement in fixes:
            content = re.sub(pattern, replacement, content)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed property access issues in {file_path}")
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == '__main__':
    fix_property_access_issues()
