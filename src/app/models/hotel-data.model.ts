import { EntityId } from './base.model';
import { Hotel } from './hotel.model';
import { RoomType } from './room-type.model';
import { Room } from './room.model';
import { RatePlan } from './rate-plan.model';
import { Tax, TaxGroup } from './tax.model';
import { Amenity, AmenityGroup } from './amenity.model';
import { Policy } from './policy.model';
import { User, Role, Department } from './user.model';

/**
 * Complete hotel configuration data structure
 * This represents the entire hotel setup in a single JSON object
 */
export interface HotelData {
  // Metadata
  version: string;
  dataVersion: number;
  lastUpdated: Date;
  exportedBy: EntityId;
  exportedAt: Date;
  
  // Core Hotel Data
  hotel: Hotel;
  
  // Room Configuration
  roomTypes: RoomType[];
  rooms: Room[];
  
  // Pricing & Revenue
  ratePlans: RatePlan[];
  taxes: Tax[];
  taxGroups: TaxGroup[];
  
  // Services & Features
  amenities: Amenity[];
  amenityGroups: AmenityGroup[];
  
  // Policies & Rules
  policies: Policy[];
  
  // Users & Access Control
  departments: Department[];
  roles: Role[];
  users: User[];
  
  // Validation & Integrity
  referenceValidation: ReferenceValidation;
  constraints: DataConstraints;
}

/**
 * Reference validation ensures data integrity
 */
export interface ReferenceValidation {
  // Required references that must exist
  requiredReferences: {
    roomTypeIds: EntityId[];
    ratePlanIds: EntityId[];
    taxIds: EntityId[];
    amenityIds: EntityId[];
    policyIds: EntityId[];
    userIds: EntityId[];
    roleIds: EntityId[];
    departmentIds: EntityId[];
  };
  
  // Cross-references between entities
  crossReferences: {
    roomsToRoomTypes: Record<EntityId, EntityId>; // roomId -> roomTypeId
    roomTypesToAmenities: Record<EntityId, EntityId[]>; // roomTypeId -> amenityIds
    ratePlansToTaxes: Record<EntityId, EntityId[]>; // ratePlanId -> taxIds
    ratePlansToRoomTypes: Record<EntityId, EntityId[]>; // ratePlanId -> roomTypeIds
    usersToRoles: Record<EntityId, EntityId[]>; // userId -> roleIds
    usersToDepartments: Record<EntityId, EntityId>; // userId -> departmentId
  };
  
  // Orphaned references (should be empty in valid data)
  orphanedReferences: {
    roomsWithInvalidRoomTypes: EntityId[];
    ratePlansWithInvalidTaxes: EntityId[];
    usersWithInvalidRoles: EntityId[];
    // Add more as needed
  };
}

/**
 * Data constraints and business rules
 */
export interface DataConstraints {
  // Unique constraints
  uniqueConstraints: {
    codes: {
      hotelCode: string;
      roomTypeCodes: string[];
      roomNumbers: string[];
      ratePlanCodes: string[];
      taxCodes: string[];
      amenityCodes: string[];
      usernames: string[];
      roleNames: string[];
      departmentCodes: string[];
    };
  };
  
  // Business rules
  businessRules: {
    maxRoomTypes: number;
    maxRooms: number;
    maxRatePlans: number;
    maxTaxes: number;
    maxAmenities: number;
    maxUsers: number;
    maxRoles: number;
    maxDepartments: number;
  };
  
  // Validation rules
  validationRules: {
    roomTypesMustHaveRooms: boolean;
    ratePlansMustHaveTaxes: boolean;
    usersMustHaveRoles: boolean;
    deleteReferencedEntitiesPrevented: boolean;
  };
}

/**
 * Import/Export metadata
 */
export interface DataExportInfo {
  exportId: EntityId;
  exportedBy: EntityId;
  exportedAt: Date;
  exportType: 'full' | 'partial' | 'backup';
  includedEntities: string[];
  excludedFields?: string[];
  compressionUsed: boolean;
  encryptionUsed: boolean;
  fileSize: number; // bytes
  checksum: string;
}

/**
 * Configuration metadata
 */
export interface HotelConfiguration {
  // System Settings
  systemSettings: {
    timezone: string;
    dateFormat: string;
    timeFormat: string;
    currencyFormat: string;
    numberFormat: string;
    defaultLanguage: string;
    supportedLanguages: string[];
  };
  
  // Feature Flags
  features: {
    multiCurrency: boolean;
    multiLanguage: boolean;
    yieldManagement: boolean;
    channelManager: boolean;
    housekeeping: boolean;
    maintenance: boolean;
    pos: boolean;
    accounting: boolean;
    reporting: boolean;
    mobileApp: boolean;
  };
  
  // Integration Settings
  integrations: {
    pms: string[];
    channelManager?: string;
    paymentGateway?: string[];
    accounting?: string;
    pos?: string;
  };
  
  // Customizations
  customizations: {
    customFields: CustomField[];
    workflows: WorkflowDefinition[];
    reports: ReportDefinition[];
  };
}

export interface CustomField {
  id: EntityId;
  entityType: string; // 'room', 'guest', 'booking', etc.
  fieldName: string;
  fieldType: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multi-select';
  isRequired: boolean;
  defaultValue?: any;
  options?: string[]; // For select fields
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

export interface WorkflowDefinition {
  id: EntityId;
  name: string;
  triggerEvent: string;
  conditions: any[];
  actions: any[];
  isActive: boolean;
}

export interface ReportDefinition {
  id: EntityId;
  name: string;
  category: string;
  query: string;
  parameters: any[];
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    time: string;
    recipients: string[];
  };
}

/**
 * Utility type for creating new hotel data
 */
export type CreateHotelData = Omit<HotelData, 
  | 'version' 
  | 'dataVersion' 
  | 'lastUpdated' 
  | 'exportedBy' 
  | 'exportedAt'
  | 'referenceValidation'
>;

/**
 * Utility type for partial hotel data updates
 */
export type PartialHotelData = Partial<HotelData>;

/**
 * Entity collection types for easier access
 */
export type EntityCollection<T> = Record<EntityId, T>;

export interface HotelDataCollections {
  hotel: Hotel;
  roomTypes: EntityCollection<RoomType>;
  rooms: EntityCollection<Room>;
  ratePlans: EntityCollection<RatePlan>;
  taxes: EntityCollection<Tax>;
  taxGroups: EntityCollection<TaxGroup>;
  amenities: EntityCollection<Amenity>;
  amenityGroups: EntityCollection<AmenityGroup>;
  policies: EntityCollection<Policy>;
  departments: EntityCollection<Department>;
  roles: EntityCollection<Role>;
  users: EntityCollection<User>;
}
