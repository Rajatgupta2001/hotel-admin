import { HotelData } from './hotel-data.model';
import { EntityId } from './base.model';

const now = new Date();
const HOTEL_ID: EntityId = 'hotel-1';
const ADMIN_ROLE_ID: EntityId = 'role-admin';
const FO_DEPT_ID: EntityId = 'dept-frontoffice';
const ADMIN_USER_ID: EntityId = 'user-admin';

export const SAMPLE_HOTEL_DATA: HotelData = {
  // Metadata
  version: '1.0.0',
  dataVersion: 1,
  lastUpdated: now,
  exportedBy: 'system',
  exportedAt: now,

  // Core Hotel Data (complete per Hotel model)
  hotel: {
    id: HOTEL_ID,
    code: 'DEMO',
    name: 'Demo Hotel',
    description: 'Sample configuration seeded locally',
    status: 'active',
    createdAt: now,
    updatedAt: now,

    companyId: 'company-1',
    email: 'info@demohotel.local',
    phone: '+1-555-0100',

    address: {
      street1: '123 Demo Street',
      city: 'Sample City',
      state: 'CA',
      country: 'US',
      postalCode: '90001',
    },

    timezone: 'UTC',
    currency: 'USD',
    defaultLanguage: 'en',
    supportedLanguages: ['en'],

    checkInTime: '14:00',
    checkOutTime: '12:00',
    totalRooms: 0,

    taxSettings: {
      defaultTaxInclusive: false,
      taxApplicableOn: 'room',
      defaultTaxIds: [],
      fiscalYear: { startMonth: 1, startDay: 1 },
    },
    billingSettings: {
      currency: 'USD',
      decimalPlaces: 2,
      roundingMethod: 'round',
      invoicePrefix: 'INV',
      invoiceStartNumber: 1,
    },
    features: {
      multiLanguage: false,
      nightAudit: true,
      pos: false,
      housekeeping: true,
      maintenance: true,
      crs: false,
      channelManager: false,
      reports: true,
    },
    contactInfo: {
      managerName: 'Admin User',
      managerEmail: 'admin@demohotel.local',
      managerPhone: '+1-555-0100',
    },
  },

  // Empty collections to start
  roomTypes: [],
  rooms: [],
  ratePlans: [],
  taxes: [],
  taxGroups: [],
  amenities: [],
  amenityGroups: [],
  policies: [],

  departments: [
    {
      id: FO_DEPT_ID,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      hotelId: HOTEL_ID,
      name: 'Front Office',
      code: 'FO',
      isActive: true,
    },
  ],
  roles: [
    {
      id: ADMIN_ROLE_ID,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      hotelId: HOTEL_ID,
      name: 'admin',
      displayName: 'Administrator',
      description: 'Full access',
      permissions: [],
      isSystemRole: true,
      isDefault: true,
    },
  ],
  users: [
    {
      id: ADMIN_USER_ID,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      hotelId: HOTEL_ID,

      // Personal Information
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@demohotel.local',

      // Authentication
      username: 'admin',
      mustChangePassword: false,

      // Required properties
      bloodgroup: 'O+',
      workAreas: ['Admin Console', 'Report Console', 'Frontdesk'],

      // Profile
      preferredLanguage: 'en',
      timezone: 'UTC',

      // Employment Details
      employmentType: 'full-time',

      // Permissions & Roles
      roles: [
        {
          roleId: ADMIN_ROLE_ID,
          roleName: 'Administrator',
          assignedAt: now,
          assignedBy: ADMIN_USER_ID,
          isActive: true,
        },
      ],
      permissions: [],
      isActive: true,

      // Login & Security
      failedLoginAttempts: 0,

      // Two-Factor Authentication
      twoFactorEnabled: false,

      // Notification Preferences
      notificationSettings: {
        email: { enabled: true, frequency: 'immediate', types: [] },
        sms: { enabled: false, types: [] },
        inApp: { enabled: true, types: [] },
        desktop: { enabled: false, types: [] },
      },

      // Session Management
      maxConcurrentSessions: 3,
      sessionTimeoutMinutes: 60,

      // Employment Details
      departmentId: FO_DEPT_ID,
    },
  ],

  // Validation & Constraints baselines
  referenceValidation: {
    requiredReferences: {
      roomTypeIds: [],
      ratePlanIds: [],
      taxIds: [],
      amenityIds: [],
      policyIds: [],
      userIds: [],
      roleIds: [],
      departmentIds: [],
    },
    crossReferences: {
      roomsToRoomTypes: {},
      roomTypesToAmenities: {},
      ratePlansToTaxes: {},
      ratePlansToRoomTypes: {},
      usersToRoles: {},
      usersToDepartments: {},
    },
    orphanedReferences: {
      roomsWithInvalidRoomTypes: [],
      ratePlansWithInvalidTaxes: [],
      usersWithInvalidRoles: [],
    },
  },
  constraints: {
    uniqueConstraints: {
      codes: {
        hotelCode: 'DEMO',
        roomTypeCodes: [],
        roomNumbers: [],
        ratePlanCodes: [],
        taxCodes: [],
        amenityCodes: [],
        usernames: ['admin'],
        roleNames: ['admin'],
        departmentCodes: ['FO'],
      },
    },
    businessRules: {
      maxRoomTypes: 200,
      maxRooms: 2000,
      maxRatePlans: 500,
      maxTaxes: 200,
      maxAmenities: 500,
      maxUsers: 1000,
      maxRoles: 100,
      maxDepartments: 100,
    },
    validationRules: {
      roomTypesMustHaveRooms: false,
      ratePlansMustHaveTaxes: false,
      usersMustHaveRoles: true,
      deleteReferencedEntitiesPrevented: true,
    },
  },
};
