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
      {
        path: 'storage-test',
        loadComponent: () =>
          import('./components/storage-test/storage-test.component').then(
            (m) => m.StorageTestComponent,
          ),
      },

      // 1. Rooms Manager
      {
        path: 'rooms-manager',
        redirectTo: 'rooms-manager/amenities',
        pathMatch: 'full',
      },
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
            path: 'floors',
            loadComponent: () =>
              import('./pages/rooms-manager/floors/floors.component').then(
                (m) => m.FloorsComponent,
              ),
          },
          {
            path: 'room-types',
            loadComponent: () =>
              import(
                './pages/rooms-manager/room-types/room-types.component'
              ).then((m) => m.RoomTypesComponent),
          },
          {
            path: 'room-features',
            loadComponent: () =>
              import(
                './pages/rooms-manager/room-features/room-features.component'
              ).then((m) => m.RoomFeaturesComponent),
          },
          {
            path: 'other-hotel-areas',
            loadComponent: () =>
              import(
                './pages/rooms-manager/other-hotel-areas/other-hotel-areas.component'
              ).then((m) => m.OtherHotelAreasComponent),
          },
          {
            path: 'display-colors',
            loadComponent: () =>
              import(
                './pages/rooms-manager/display-colors/display-colors.component'
              ).then((m) => m.DisplayColorsComponent),
          },
          {
            path: 'room-taxes',
            loadComponent: () =>
              import(
                './pages/rooms-manager/room-taxes/room-taxes.component'
              ).then((m) => m.RoomTaxesComponent),
          },
          {
            path: 'phone-extensions',
            loadComponent: () =>
              import(
                './pages/rooms-manager/phone-extensions/phone-extensions.component'
              ).then((m) => m.PhoneExtensionsComponent),
          },
          {
            path: 'bill-messages',
            loadComponent: () =>
              import(
                './pages/rooms-manager/bill-messages/bill-messages.component'
              ).then((m) => m.BillMessagesComponent),
          },
          {
            path: 'terms-conditions',
            loadComponent: () =>
              import(
                './pages/rooms-manager/terms-conditions/terms-conditions.component'
              ).then((m) => m.TermsConditionsComponent),
          },
        ],
      },

      // 2. POS Manager
      {
        path: 'pos-manager',
        redirectTo: 'pos-manager/pos-points',
        pathMatch: 'full',
      },
      {
        path: 'pos-manager',
        children: [
          {
            path: 'pos-points',
            loadComponent: () =>
              import(
                './pages/pos-manager/pos-points/pos-points.component'
              ).then((m) => m.PosPointsComponent),
          },
          {
            path: 'pos-taxes',
            loadComponent: () =>
              import('./pages/pos-manager/pos-taxes/pos-taxes.component').then(
                (m) => m.PosTaxesComponent,
              ),
          },
          {
            path: 'measurement-units',
            loadComponent: () =>
              import(
                './pages/pos-manager/measurement-units/measurement-units.component'
              ).then((m) => m.MeasurementUnitsComponent),
          },
          {
            path: 'pos-attributes',
            loadComponent: () =>
              import(
                './pages/pos-manager/pos-attributes/pos-attributes.component'
              ).then((m) => m.PosAttributesComponent),
          },
          {
            path: 'pos-items',
            loadComponent: () =>
              import('./pages/pos-manager/pos-items/pos-items.component').then(
                (m) => m.PosItemsComponent,
              ),
          },
          {
            path: 'kitchen',
            loadComponent: () =>
              import('./pages/pos-manager/kitchen/kitchen.component').then(
                (m) => m.KitchenComponent,
              ),
          },
        ],
      },

      // 3. Guest Manager
      {
        path: 'guest-manager',
        redirectTo: 'guest-manager/salutations',
        pathMatch: 'full',
      },
      {
        path: 'guest-manager',
        children: [
          {
            path: 'salutations',
            loadComponent: () =>
              import(
                './pages/guest-manager/salutations/salutations.component'
              ).then((m) => m.SalutationsComponent),
          },
          {
            path: 'guest-list',
            loadComponent: () =>
              import(
                './pages/guest-manager/guest-list/guest-list.component'
              ).then((m) => m.GuestListComponent),
          },
          {
            path: 'vip-guest-list',
            loadComponent: () =>
              import(
                './pages/guest-manager/vip-guest-list/vip-guest-list.component'
              ).then((m) => m.VipGuestListComponent),
          },
          {
            path: 'black-list',
            loadComponent: () =>
              import(
                './pages/guest-manager/black-list/black-list.component'
              ).then((m) => m.BlackListComponent),
          },
          {
            path: 'credit-card-console',
            loadComponent: () =>
              import(
                './pages/guest-manager/credit-card-console/credit-card-console.component'
              ).then((m) => m.CreditCardConsoleComponent),
          },
          {
            path: 'guest-preferences',
            loadComponent: () =>
              import(
                './pages/guest-manager/guest-preferences/guest-preferences.component'
              ).then((m) => m.GuestPreferencesComponent),
          },
          {
            path: 'guest-upload',
            loadComponent: () =>
              import(
                './pages/guest-manager/guest-upload/guest-upload.component'
              ).then((m) => m.GuestUploadComponent),
          },
          {
            path: 'trip-reviews',
            loadComponent: () =>
              import(
                './pages/guest-manager/trip-reviews/trip-reviews.component'
              ).then((m) => m.TripReviewsComponent),
          },
          {
            path: 'custom-fields',
            loadComponent: () =>
              import(
                './pages/guest-manager/custom-fields/custom-fields.component'
              ).then((m) => m.CustomFieldsComponent),
          },
        ],
      },

      // 4. General
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
          {
            path: 'departments',
            loadComponent: () =>
              import('./pages/general/departments/departments.component').then(
                (m) => m.DepartmentsComponent,
              ),
          },
          {
            path: 'currencies',
            loadComponent: () =>
              import('./pages/general/currencies/currencies.component').then(
                (m) => m.CurrenciesComponent,
              ),
          },
          {
            path: 'languages',
            loadComponent: () =>
              import('./pages/general/languages/languages.component').then(
                (m) => m.LanguagesComponent,
              ),
          },
          {
            path: 'cancellation-reasons',
            loadComponent: () =>
              import(
                './pages/general/cancellation-reasons/cancellation-reasons.component'
              ).then((m) => m.CancellationReasonsComponent),
          },
          {
            path: 'tax-exempt-reasons',
            loadComponent: () =>
              import(
                './pages/general/tax-exempt-reasons/tax-exempt-reasons.component'
              ).then((m) => m.TaxExemptReasonsComponent),
          },
          {
            path: 'reasons-list',
            loadComponent: () =>
              import(
                './pages/general/reasons-list/reasons-list.component'
              ).then((m) => m.ReasonsListComponent),
          },
          {
            path: 'operation-reasons',
            loadComponent: () =>
              import(
                './pages/general/operation-reasons/operation-reasons.component'
              ).then((m) => m.OperationReasonsComponent),
          },
          {
            path: 'special-discounts',
            loadComponent: () =>
              import(
                './pages/general/special-discounts/special-discounts.component'
              ).then((m) => m.SpecialDiscountsComponent),
          },
          {
            path: 'announcements',
            loadComponent: () =>
              import(
                './pages/general/announcements/announcements.component'
              ).then((m) => m.AnnouncementsComponent),
          },
          {
            path: 'account-attributes',
            loadComponent: () =>
              import(
                './pages/general/account-attributes/account-attributes.component'
              ).then((m) => m.AccountAttributesComponent),
          },
          {
            path: 'pay-modes',
            loadComponent: () =>
              import('./pages/general/pay-modes/pay-modes.component').then(
                (m) => m.PayModesComponent,
              ),
          },
          {
            path: 'pay-types',
            loadComponent: () =>
              import('./pages/general/pay-types/pay-types.component').then(
                (m) => m.PayTypesComponent,
              ),
          },
          {
            path: 'counters',
            loadComponent: () =>
              import('./pages/general/counters/counters.component').then(
                (m) => m.CountersComponent,
              ),
          },
          {
            path: 'identification-types',
            loadComponent: () =>
              import(
                './pages/general/identification-types/identification-types.component'
              ).then((m) => m.IdentificationTypesComponent),
          },
          {
            path: 'source-of-business',
            loadComponent: () =>
              import(
                './pages/general/source-of-business/source-of-business.component'
              ).then((m) => m.SourceOfBusinessComponent),
          },
          {
            path: 'promo-codes',
            loadComponent: () =>
              import('./pages/general/promo-codes/promo-codes.component').then(
                (m) => m.PromoCodesComponent,
              ),
          },
          {
            path: 'custom-tag-list',
            loadComponent: () =>
              import(
                './pages/general/custom-tag-list/custom-tag-list.component'
              ).then((m) => m.CustomTagListComponent),
          },
          {
            path: 'general-custom-fields',
            loadComponent: () =>
              import(
                './pages/general/general-custom-fields/general-custom-fields.component'
              ).then((m) => m.GeneralCustomFieldsComponent),
          },
          {
            path: 'arrival-departure-modes',
            loadComponent: () =>
              import(
                './pages/general/arrival-departure-modes/arrival-departure-modes.component'
              ).then((m) => m.ArrivalDepartureModesComponent),
          },
          {
            path: 'preferences',
            loadComponent: () =>
              import('./pages/general/preferences/preferences.component').then(
                (m) => m.PreferencesComponent,
              ),
          },
          {
            path: 'cancellation-policy',
            loadComponent: () =>
              import(
                './pages/general/cancellation-policy/cancellation-policy.component'
              ).then((m) => m.CancellationPolicyComponent),
          },
          {
            path: 'booking-policy',
            loadComponent: () =>
              import(
                './pages/general/booking-policy/booking-policy.component'
              ).then((m) => m.BookingPolicyComponent),
          },
          {
            path: 'minimum-bookable-nights',
            loadComponent: () =>
              import(
                './pages/general/minimum-bookable-nights/minimum-bookable-nights.component'
              ).then((m) => m.MinimumBookableNightsComponent),
          },
          {
            path: 'email-configuration',
            loadComponent: () =>
              import(
                './pages/general/email-configuration/email-configuration.component'
              ).then((m) => m.EmailConfigurationComponent),
          },
          {
            path: 'email-settings',
            loadComponent: () =>
              import(
                './pages/general/email-settings/email-settings.component'
              ).then((m) => m.EmailSettingsComponent),
          },
          {
            path: 'cc-locator-email-settings',
            loadComponent: () =>
              import(
                './pages/general/cc-locator-email-settings/cc-locator-email-settings.component'
              ).then((m) => m.CcLocatorEmailSettingsComponent),
          },
          {
            path: 'notes',
            loadComponent: () =>
              import('./pages/general/notes/notes.component').then(
                (m) => m.NotesComponent,
              ),
          },
          {
            path: 'logged-in-users',
            loadComponent: () =>
              import(
                './pages/general/logged-in-users/logged-in-users.component'
              ).then((m) => m.LoggedInUsersComponent),
          },
          {
            path: 'frontdesk-login-script',
            loadComponent: () =>
              import(
                './pages/general/frontdesk-login-script/frontdesk-login-script.component'
              ).then((m) => m.FrontdeskLoginScriptComponent),
          },
          {
            path: 'early-bird-discount',
            loadComponent: () =>
              import(
                './pages/general/early-bird-discount/early-bird-discount.component'
              ).then((m) => m.EarlyBirdDiscountComponent),
          },
          {
            path: 'last-minute-discount',
            loadComponent: () =>
              import(
                './pages/general/last-minute-discount/last-minute-discount.component'
              ).then((m) => m.LastMinuteDiscountComponent),
          },
          {
            path: 'long-stay-discount',
            loadComponent: () =>
              import(
                './pages/general/long-stay-discount/long-stay-discount.component'
              ).then((m) => m.LongStayDiscountComponent),
          },
          {
            path: 'dynamic-pricing',
            loadComponent: () =>
              import(
                './pages/general/dynamic-pricing/dynamic-pricing.component'
              ).then((m) => m.DynamicPricingComponent),
          },
          {
            path: 'market-segment',
            loadComponent: () =>
              import(
                './pages/general/market-segment/market-segment.component'
              ).then((m) => m.MarketSegmentComponent),
          },
          {
            path: 'job-types',
            loadComponent: () =>
              import('./pages/general/job-types/job-types.component').then(
                (m) => m.JobTypesComponent,
              ),
          },
          {
            path: 'guest-service-list',
            loadComponent: () =>
              import(
                './pages/general/guest-service-list/guest-service-list.component'
              ).then((m) => m.GuestServiceListComponent),
          },
          {
            path: 'lost-found-types',
            loadComponent: () =>
              import(
                './pages/general/lost-found-types/lost-found-types.component'
              ).then((m) => m.LostFoundTypesComponent),
          },
          {
            path: 'ag-grid-demo',
            loadComponent: () =>
              import(
                './pages/general/ag-grid-demo/ag-grid-demo.component'
              ).then((m) => m.AgGridDemoComponent),
          },
          {
            path: 'backup-restore',
            loadComponent: () =>
              import(
                './components/backup-restore/backup-restore.component'
              ).then((m) => m.BackupRestoreComponent),
          },
        ],
      },

      // 5. Company Info
      {
        path: 'company-info',
        children: [
          // {
          //   path: 'company-profile',
          //   loadComponent: () => import('./pages/company-info/company-profile/company-profile.component').then(m => {
          //     const component = m.CompanyProfileComponent as any;
          //     return component;
          //   })
          // },
          {
            path: 'hotel-information',
            loadComponent: () =>
              import(
                './pages/company-info/hotel-information/hotel-information.component'
              ).then((m) => m.HotelInformationComponent),
          },
          {
            path: 'hotel-categories',
            loadComponent: () =>
              import(
                './pages/company-info/hotel-categories/hotel-categories.component'
              ).then((m) => m.HotelCategoriesComponent),
          },
          {
            path: 'mailchimp-connect',
            loadComponent: () =>
              import(
                './pages/company-info/mailchimp-connect/mailchimp-connect.component'
              ).then((m) => m.MailchimpConnectComponent),
          },
          {
            path: 'channel-manager-offer',
            loadComponent: () =>
              import(
                './pages/company-info/channel-manager-offer/channel-manager-offer.component'
              ).then((m) => m.ChannelManagerOfferComponent),
          },
          {
            path: 'property-layout',
            loadComponent: () =>
              import(
                './pages/company-info/property-layout/property-layout.component'
              ).then((m) => m.PropertyLayoutComponent),
          },
        ],
      },

      // 6. Price Manager
      {
        path: 'price-manager',
        children: [
          // {
          //   path: 'seasons-attribute',
          //   loadComponent: () => import('./pages/price-manager/seasons-attribute/seasons-attribute.component').then(m => m.SeasonsAttributeComponent)
          // },
          {
            path: 'seasons',
            loadComponent: () =>
              import('./pages/price-manager/seasons/seasons.component').then(
                (m) => m.SeasonsComponent,
              ),
          },
          {
            path: 'special-periods',
            loadComponent: () =>
              import(
                './pages/price-manager/special-periods/special-periods.component'
              ).then((m) => m.SpecialPeriodsComponent),
          },
          {
            path: 'room-prices',
            loadComponent: () =>
              import(
                './pages/price-manager/room-prices/room-prices.component'
              ).then((m) => m.RoomPricesComponent),
          },
          {
            path: 'add-ons',
            loadComponent: () =>
              import('./pages/price-manager/add-ons/add-ons.component').then(
                (m) => m.AddOnsComponent,
              ),
          },
          {
            path: 'packages-master',
            loadComponent: () =>
              import(
                './pages/price-manager/packages-master/packages-master.component'
              ).then((m) => m.PackagesMasterComponent),
          },
          {
            path: 'frontdesk-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/frontdesk-packages/frontdesk-packages.component'
              ).then((m) => m.FrontdeskPackagesComponent),
          },
          {
            path: 'web-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/web-packages/web-packages.component'
              ).then((m) => m.WebPackagesComponent),
          },
          {
            path: 'corporate-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/corporate-packages/corporate-packages.component'
              ).then((m) => m.CorporatePackagesComponent),
          },
          {
            path: 'travel-agent-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/travel-agent-packages/travel-agent-packages.component'
              ).then((m) => m.TravelAgentPackagesComponent),
          },
          {
            path: 'vip-guest-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/vip-guest-packages/vip-guest-packages.component'
              ).then((m) => m.VipGuestPackagesComponent),
          },
          {
            path: 'gds-packages',
            loadComponent: () =>
              import(
                './pages/price-manager/gds-packages/gds-packages.component'
              ).then((m) => m.GdsPackagesComponent),
          },
          {
            path: 'centralized-rate',
            loadComponent: () =>
              import(
                './pages/price-manager/centralized-rate/centralized-rate.component'
              ).then((m) => m.CentralizedRateComponent),
          },
          {
            path: 'group-booking-source',
            loadComponent: () =>
              import(
                './pages/price-manager/group-booking-source/group-booking-source.component'
              ).then((m) => m.GroupBookingSourceComponent),
          },
          {
            path: 'group-tax',
            loadComponent: () =>
              import(
                './pages/price-manager/group-tax/group-tax.component'
              ).then((m) => m.GroupTaxComponent),
          },
          {
            path: 'rate-manager',
            loadComponent: () =>
              import(
                './pages/price-manager/rate-manager/rate-manager.component'
              ).then((m) => m.RateManagerComponent),
          },
          {
            path: 'day-use-slot',
            loadComponent: () =>
              import(
                './pages/price-manager/day-use-slot/day-use-slot.component'
              ).then((m) => m.DayUseSlotComponent),
          },
        ],
      },

      // 7. Users Manager
      {
        path: 'users-manager',
        children: [
          // {
          //   path: 'user-levels',
          //   loadComponent: () => import('./pages/users-manager/user-levels/user-levels.component').then(m => m.UserLevelsComponent)
          // },
          {
            path: 'users',
            loadComponent: () =>
              import('./pages/users-manager/users/users.component').then(
                (m) => m.UsersComponent,
              ),
          },
          {
            path: 'login-activity',
            loadComponent: () =>
              import(
                './pages/users-manager/login-activity/login-activity.component'
              ).then((m) => m.LoginActivityComponent),
          },
        ],
      },

      // 8. Console
      {
        path: 'console',
        children: [
          // {
          //   path: 'registered-corporate',
          //   loadComponent: () => import('./pages/console/registered-corporate/registered-corporate.component').then(m => m.RegisteredCorporateComponent)
          // },
          {
            path: 'registered-travel-agent',
            loadComponent: () =>
              import(
                './pages/console/registered-travel-agent/registered-travel-agent.component'
              ).then((m) => m.RegisteredTravelAgentComponent),
          },
          {
            path: 'console-custom-fields',
            loadComponent: () =>
              import(
                './pages/console/console-custom-fields/console-custom-fields.component'
              ).then((m) => m.ConsoleCustomFieldsComponent),
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
