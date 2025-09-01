export interface NavigationItem {
  label: string;
  path?: string;
  icon: string;
  children?: NavigationItem[];
  badge?: string;
}

export const NAVIGATION_MENU: NavigationItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Rooms Manager',
    icon: 'meeting_room',
    children: [
      { label: 'Amenities', path: '/rooms-manager/amenities', icon: 'star' },
      { label: 'Blocks', path: '/rooms-manager/blocks', icon: 'domain' },
      { label: 'Floors', path: '/rooms-manager/floors', icon: 'layers' },
      {
        label: 'Room Types & Rooms',
        path: '/rooms-manager/room-types',
        icon: 'home',
      },
      {
        label: 'Room Features',
        path: '/rooms-manager/room-features',
        icon: 'home',
      },
      {
        label: 'Other Hotel Areas',
        path: '/rooms-manager/other-hotel-areas',
        icon: 'place',
      },
      {
        label: 'Display Colors',
        path: '/rooms-manager/display-colors',
        icon: 'palette',
      },
      {
        label: 'Room Taxes',
        path: '/rooms-manager/room-taxes',
        icon: 'account_balance',
      },
      {
        label: 'Phone Extensions',
        path: '/rooms-manager/phone-extensions',
        icon: 'phone',
      },
      {
        label: 'Bill Messages',
        path: '/rooms-manager/bill-messages',
        icon: 'message',
      },
      {
        label: 'Terms & Conditions',
        path: '/rooms-manager/terms-conditions',
        icon: 'gavel',
      },
    ],
  },
  {
    label: 'POS Manager',
    icon: 'store',
    children: [
      { label: 'POS Points', path: '/pos-manager/pos-points', icon: 'store' },
      { label: 'POS Taxes', path: '/pos-manager/pos-taxes', icon: 'receipt' },
      {
        label: 'Measurement Units',
        path: '/pos-manager/measurement-units',
        icon: 'straighten',
      },
      {
        label: 'POS Attributes',
        path: '/pos-manager/pos-attributes',
        icon: 'category',
      },
      { label: 'POS Items', path: '/pos-manager/pos-items', icon: 'inventory' },
      {
        label: 'Bill Messages',
        path: '/pos-manager/bill-messages',
        icon: 'message',
      },
      { label: 'Kitchen', path: '/pos-manager/kitchen', icon: 'restaurant' },
    ],
  },
  {
    label: 'Guest Manager',
    icon: 'people',
    children: [
      {
        label: 'List of Salutations',
        path: '/guest-manager/salutations',
        icon: 'person',
      },
      {
        label: 'Guest List',
        path: '/guest-manager/guest-list',
        icon: 'people',
      },
      {
        label: 'VIP Guest List',
        path: '/guest-manager/vip-guest-list',
        icon: 'star_border',
      },
      { label: 'Black List', path: '/guest-manager/black-list', icon: 'block' },
      {
        label: 'Credit Card Console',
        path: '/guest-manager/credit-card-console',
        icon: 'credit_card',
      },
      {
        label: 'Guest Preferences',
        path: '/guest-manager/guest-preferences',
        icon: 'tune',
      },
      {
        label: 'Guest Upload',
        path: '/guest-manager/guest-upload',
        icon: 'upload',
      },
      {
        label: 'Trip Reviews',
        path: '/guest-manager/trip-reviews',
        icon: 'rate_review',
      },
      {
        label: 'Custom Fields',
        path: '/guest-manager/custom-fields',
        icon: 'dynamic_form',
      },
    ],
  },
  {
    label: 'General',
    icon: 'settings',
    children: [
      {
        label: 'Default Settings',
        path: '/general/default-settings',
        icon: 'settings',
      },
      {
        label: 'Hotel Custom Settings',
        path: '/general/hotel-custom-settings',
        icon: 'tune',
      },
      { label: 'Departments', path: '/general/departments', icon: 'business' },
      {
        label: 'List of Currencies',
        path: '/general/currencies',
        icon: 'attach_money',
      },
      {
        label: 'List of Languages',
        path: '/general/languages',
        icon: 'language',
      },
      {
        label: 'Reasons for Cancellation',
        path: '/general/cancellation-reasons',
        icon: 'cancel',
      },
      {
        label: 'Reasons for Tax-Exempt',
        path: '/general/tax-exempt-reasons',
        icon: 'money_off',
      },
      {
        label: 'List of Reasons',
        path: '/general/reasons-list',
        icon: 'list_alt',
      },
      {
        label: 'Reasons for Operations',
        path: '/general/operation-reasons',
        icon: 'build',
      },
      {
        label: 'Special Discounts',
        path: '/general/special-discounts',
        icon: 'local_offer',
      },
      {
        label: 'Announcements',
        path: '/general/announcements',
        icon: 'campaign',
      },
      {
        label: 'Account Attributes',
        path: '/general/account-attributes',
        icon: 'account_circle',
      },
      { label: 'Pay Modes', path: '/general/pay-modes', icon: 'payment' },
      { label: 'Pay Types', path: '/general/pay-types', icon: 'credit_card' },
      {
        label: 'Counters',
        path: '/general/counters',
        icon: 'confirmation_number',
      },
      {
        label: 'Identification Types',
        path: '/general/identification-types',
        icon: 'badge',
      },
      {
        label: 'Guest Type',
        path: '/general/guest-types',
        icon: 'person_outline',
      },
      {
        label: 'Source of Business',
        path: '/general/source-of-business',
        icon: 'trending_up',
      },
      {
        label: 'PromoCode/Un-lock Deal',
        path: '/general/promo-codes',
        icon: 'loyalty',
      },
      {
        label: 'Custom Tag List',
        path: '/general/custom-tag-list',
        icon: 'local_offer',
      },
      {
        label: 'Custom Fields',
        path: '/general/general-custom-fields',
        icon: 'dynamic_form',
      },
      {
        label: 'Mode of Arrival/Departure',
        path: '/general/arrival-departure-modes',
        icon: 'flight',
      },
      { label: 'Preferences', path: '/general/preferences', icon: 'favorite' },
      {
        label: 'Cancellation Policy',
        path: '/general/cancellation-policy',
        icon: 'policy',
      },
      {
        label: 'Booking Policy',
        path: '/general/booking-policy',
        icon: 'book_online',
      },
      {
        label: 'Frontdesk Minimum Bookable Nights',
        path: '/general/minimum-bookable-nights',
        icon: 'hotel',
      },
      {
        label: 'Email Configuration',
        path: '/general/email-configuration',
        icon: 'email',
      },
      {
        label: 'Email Settings',
        path: '/general/email-settings',
        icon: 'mail_outline',
      },
      {
        label: 'CC Locator Email Settings',
        path: '/general/cc-locator-email-settings',
        icon: 'location_on',
      },
      { label: 'Notes', path: '/general/notes', icon: 'note' },
      {
        label: 'Logged In User(s)',
        path: '/general/logged-in-users',
        icon: 'people_outline',
      },
      {
        label: 'Frontdesk Login Script',
        path: '/general/frontdesk-login-script',
        icon: 'code',
      },
      {
        label: 'Early Bird Discount',
        path: '/general/early-bird-discount',
        icon: 'schedule',
      },
      {
        label: 'Last Minute Discount',
        path: '/general/last-minute-discount',
        icon: 'update',
      },
      {
        label: 'Long Stay Discount',
        path: '/general/long-stay-discount',
        icon: 'event',
      },
      {
        label: 'Dynamic Pricing',
        path: '/general/dynamic-pricing',
        icon: 'trending_up',
      },
      {
        label: 'Market Segment',
        path: '/general/market-segment',
        icon: 'pie_chart',
      },
      { label: 'Job Types', path: '/general/job-types', icon: 'work' },
      {
        label: 'Guest Service List',
        path: '/general/guest-service-list',
        icon: 'room_service',
      },
      {
        label: 'Lost & Found Type',
        path: '/general/lost-found-types',
        icon: 'find_in_page',
      },
      {
        label: 'Backup & Restore',
        path: '/general/backup-restore',
        icon: 'backup',
      },
      {
        label: 'AG Grid Demo',
        path: '/general/ag-grid-demo',
        icon: 'grid_view',
      },
    ],
  },
  {
    label: 'Company Info',
    icon: 'business',
    children: [
      {
        label: 'Company Profile',
        path: '/company-info/company-profile',
        icon: 'business',
      },
      {
        label: 'Hotel Information',
        path: '/company-info/hotel-information',
        icon: 'info',
      },
      {
        label: 'Hotel Categories',
        path: '/company-info/hotel-categories',
        icon: 'category',
      },
      {
        label: 'MailChimp Connect',
        path: '/company-info/mailchimp-connect',
        icon: 'email',
      },
      {
        label: 'Channel Manager Offer',
        path: '/company-info/channel-manager-offer',
        icon: 'router',
      },
      {
        label: 'Property Layout',
        path: '/company-info/property-layout',
        icon: 'map',
      },
    ],
  },
  {
    label: 'Price Manager',
    icon: 'attach_money',
    children: [
      {
        label: 'Seasons Attribute',
        path: '/price-manager/seasons-attribute',
        icon: 'wb_sunny',
      },
      {
        label: 'Seasons',
        path: '/price-manager/seasons',
        icon: 'calendar_today',
      },
      {
        label: 'Special Periods',
        path: '/price-manager/special-periods',
        icon: 'event',
      },
      {
        label: 'Room Prices',
        path: '/price-manager/room-prices',
        icon: 'attach_money',
      },
      {
        label: 'Add-ons (Inclusions)',
        path: '/price-manager/add-ons',
        icon: 'add_circle',
      },
      {
        label: 'Packages Master',
        path: '/price-manager/packages-master',
        icon: 'card_giftcard',
      },
      {
        label: 'Frontdesk (Packages)',
        path: '/price-manager/frontdesk-packages',
        icon: 'desktop_windows',
      },
      {
        label: 'Web (Packages)',
        path: '/price-manager/web-packages',
        icon: 'web',
      },
      {
        label: 'Corporate (Packages)',
        path: '/price-manager/corporate-packages',
        icon: 'corporate_fare',
      },
      {
        label: 'Travel Agent (Packages)',
        path: '/price-manager/travel-agent-packages',
        icon: 'flight',
      },
      {
        label: 'VIP Guest (Packages)',
        path: '/price-manager/vip-guest-packages',
        icon: 'star',
      },
      {
        label: 'Other (GDS Packages)',
        path: '/price-manager/gds-packages',
        icon: 'cloud',
      },
      {
        label: 'Centralized Rate',
        path: '/price-manager/centralized-rate',
        icon: 'center_focus_strong',
      },
      {
        label: 'Group(Booking Source)',
        path: '/price-manager/group-booking-source',
        icon: 'group',
      },
      {
        label: 'Group Tax',
        path: '/price-manager/group-tax',
        icon: 'account_balance',
      },
      {
        label: 'Rate Manager',
        path: '/price-manager/rate-manager',
        icon: 'trending_up',
      },
      {
        label: 'Day Use Slot',
        path: '/price-manager/day-use-slot',
        icon: 'schedule',
      },
    ],
  },
  {
    label: 'Users Manager',
    icon: 'people',
    children: [
      {
        label: 'User Levels',
        path: '/users-manager/user-levels',
        icon: 'security',
      },
      { label: 'Users', path: '/users-manager/users', icon: 'people' },
      {
        label: 'Login Activity',
        path: '/users-manager/login-activity',
        icon: 'history',
      },
    ],
  },
  {
    label: 'Console',
    icon: 'computer',
    children: [
      {
        label: 'Registered Corporate',
        path: '/console/registered-corporate',
        icon: 'business_center',
      },
      {
        label: 'Registered Travel Agent',
        path: '/console/registered-travel-agent',
        icon: 'flight_takeoff',
      },
      {
        label: 'Custom Fields',
        path: '/console/console-custom-fields',
        icon: 'dynamic_form',
      },
    ],
  },
];
