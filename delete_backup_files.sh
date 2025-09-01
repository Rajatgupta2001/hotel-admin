#!/bin/bash
# Script to remove backup files

cd "/home/hotelogix/Desktop/hotel-admin-pwa/src/app/pages/rooms-manager/room-types"

# Remove backup files
rm -f "room-types-backup.component.ts"
rm -f "room-types-new.component.ts"

echo "Backup files removed successfully"
ls -la
