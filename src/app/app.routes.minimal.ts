import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./components/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      // Testing with minimal routes first
      {
        path: 'rooms-manager',
        children: [
          {
            path: 'amenities',
            loadComponent: () =>
              import(
                './pages/rooms-manager/amenities/amenities.component'
              ).then((m) => m.AmenitiesComponent),
          },
          {
            path: 'blocks',
            loadComponent: () =>
              import('./pages/rooms-manager/blocks/blocks.component').then(
                (m) => m.BlocksComponent,
              ),
          },
          {
            path: 'room-types',
            loadComponent: () =>
              import(
                './pages/rooms-manager/room-types/room-types.component'
              ).then((m) => m.RoomTypesComponent),
          },
        ],
      },
      {
        path: 'general',
        children: [
          {
            path: 'default-settings',
            loadComponent: () =>
              import(
                './pages/general/default-settings/default-settings.component'
              ).then((m) => m.DefaultSettingsComponent),
          },
          {
            path: 'hotel-custom-settings',
            loadComponent: () =>
              import(
                './pages/general/hotel-custom-settings/hotel-custom-settings.component'
              ).then((m) => m.HotelCustomSettingsComponent),
          },
        ],
      },
      {
        path: 'company-info',
        children: [
          {
            path: 'hotel-information',
            loadComponent: () =>
              import(
                './pages/company-info/hotel-information/hotel-information.component'
              ).then((m) => m.HotelInformationComponent),
          },
          {
            path: 'hotel-custom-settings',
            loadComponent: () =>
              import(
                './pages/general/hotel-custom-settings/hotel-custom-settings.component'
              ).then((m) => m.HotelCustomSettingsComponent),
          },
          {
            path: 'ag-grid-demo',
            loadComponent: () =>
              import(
                './pages/general/ag-grid-demo/ag-grid-demo.component'
              ).then((m) => m.AgGridDemoComponent),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
