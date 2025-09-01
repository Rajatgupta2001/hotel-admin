import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HotelStore } from '../services/hotel-store.service';
import { SAMPLE_HOTEL_DATA } from '../models/sample-data';

/**
 * Guard to ensure a single JSON object (HotelData) exists in localStorage.
 * If missing, seeds with SAMPLE_HOTEL_DATA from the Angular models.
 */
export const initDataGuard: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  const store = inject(HotelStore);

  if (isBrowser) {
    const key = 'hotel-admin-hotel-data';
    try {
      const existing = localStorage.getItem(key);
      if (!existing) {
        store.replaceAll(SAMPLE_HOTEL_DATA);
      }
    } catch {
      // If localStorage is not accessible, still allow nav
    }
  }

  return true;
};
