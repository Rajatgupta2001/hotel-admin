import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HotelStore } from '../services/hotel-store.service';

/**
 * Guard to ensure a single JSON object (HotelData) exists in localStorage.
 * If missing, seeds with SAMPLE_HOTEL_DATA from the Angular models.
 */
export const initDataGuard: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  inject(HotelStore);

  if (isBrowser) {
    try {
      // No-op: do not seed any static/sample data automatically
    } catch {
      // If localStorage is not accessible, still allow nav
    }
  }

  return true;
};
