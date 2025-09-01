import { BaseEntity, EntityId } from './base.model';

/**
 * User and authentication configuration
 */
export interface User extends BaseEntity {
  bloodgroup: any;
workAreas: any;
  hotelId: EntityId;
  
  // Personal Information
  employeeId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  alternateEmail?: string;
  
  // Authentication
  username: string;
  passwordHash?: string; // Not included in client-side models
  lastPasswordChange?: Date;
  passwordExpiryDate?: Date;
  mustChangePassword: boolean;
  
  // Profile
  avatar?: string;
  preferredLanguage: string;
  timezone: string;
  
  // Employment Details
  jobTitle?: string;
  departmentId?: EntityId;
  managerId?: EntityId;
  hireDate?: Date;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'intern';
  
  // Work Schedule
  workSchedule?: WorkSchedule;
  shiftId?: EntityId;
  
  // Permissions & Roles
  roles: UserRole[];
  permissions: Permission[];
  isActive: boolean;
  
  // Login & Security
  lastLoginAt?: Date;
  lastLoginIP?: string;
  failedLoginAttempts: number;
  lockedUntil?: Date;
  
  // Two-Factor Authentication
  twoFactorEnabled: boolean;
  twoFactorSecret?: string;
  backupCodes?: string[];
  
  // Notification Preferences
  notificationSettings: NotificationSettings;
  
  // Access Control
  allowedIPs?: string[]; // IP whitelist
  allowedHours?: TimeRange[]; // Time-based access
  restrictedAreas?: string[]; // System areas user cannot access
  
  // Session Management
  maxConcurrentSessions: number;
  sessionTimeoutMinutes: number;
  
  // Additional Information
  emergencyContact?: EmergencyContact;
  notes?: string;
  
  // Housekeeping/Maintenance Specific (if applicable)
  housekeepingSettings?: HousekeepingSettings;
  maintenanceSettings?: MaintenanceSettings;
}

export interface UserRole {
  roleId: EntityId;
  roleName: string;
  assignedAt: Date;
  assignedBy: EntityId;
  expiresAt?: Date;
  isActive: boolean;
}

export interface Permission {
  resource: string; // 'rooms', 'rates', 'bookings', etc.
  actions: PermissionAction[];
  scope?: PermissionScope;
  conditions?: PermissionCondition[];
}

export type PermissionAction = 'create' | 'read' | 'update' | 'delete' | 'approve' | 'export' | 'import';

export interface PermissionScope {
  type: 'all' | 'own' | 'department' | 'specific';
  entityIds?: EntityId[]; // For specific scope
}

export interface PermissionCondition {
  type: 'time' | 'location' | 'amount' | 'status';
  operator: 'equals' | 'not-equals' | 'greater-than' | 'less-than' | 'in' | 'not-in';
  value: any;
}

export interface WorkSchedule {
  type: 'fixed' | 'rotating' | 'flexible';
  weeklyHours: number;
  schedule: DaySchedule[];
  breakDuration?: number; // minutes
  overtimeThreshold?: number; // hours per week
}

export interface DaySchedule {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  startTime?: string; // HH:MM format
  endTime?: string; // HH:MM format
  isWorkingDay: boolean;
  breaks?: TimeRange[];
}

export interface TimeRange {
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
}

export interface NotificationSettings {
  email: {
    enabled: boolean;
    frequency: 'immediate' | 'hourly' | 'daily' | 'weekly';
    types: NotificationType[];
  };
  sms: {
    enabled: boolean;
    phone?: string;
    types: NotificationType[];
  };
  inApp: {
    enabled: boolean;
    types: NotificationType[];
  };
  desktop: {
    enabled: boolean;
    types: NotificationType[];
  };
}

export type NotificationType = 
  | 'booking-created' 
  | 'booking-modified' 
  | 'booking-cancelled'
  | 'room-maintenance' 
  | 'housekeeping-task' 
  | 'system-alert'
  | 'rate-change' 
  | 'policy-update' 
  | 'payment-received'
  | 'guest-message' 
  | 'shift-reminder' 
  | 'report-ready';

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  alternatePhone?: string;
  email?: string;
}

export interface HousekeepingSettings {
  defaultCleaningTime: number; // minutes per room
  specializations: string[]; // 'deep-clean', 'maintenance-clean', etc.
  maxRoomsPerShift: number;
  preferredAreas?: string[];
  certifications?: string[];
}

export interface MaintenanceSettings {
  specializations: string[]; // 'plumbing', 'electrical', 'hvac', etc.
  certifications: string[];
  maxTicketsPerDay: number;
  preferredShift: 'morning' | 'afternoon' | 'evening' | 'night';
  emergencyResponse: boolean;
}

// Role definitions
export interface Role extends BaseEntity {
  hotelId: EntityId;
  name: string;
  displayName: string;
  description?: string;
  
  permissions: Permission[];
  
  // Role Hierarchy
  parentRoleId?: EntityId;
  childRoleIds?: EntityId[];
  
  // Role Properties
  isSystemRole: boolean; // Cannot be deleted
  isDefault: boolean; // Default role for new users
  maxUsers?: number; // Maximum users with this role
  
  // Access Restrictions
  workingHourRestrictions?: TimeRange[];
  ipRestrictions?: string[];
  locationRestrictions?: string[];
}

// Department for organizational structure
export interface Department extends BaseEntity {
  hotelId: EntityId;
  name: string;
  code: string;
  description?: string;
  
  // Hierarchy
  parentDepartmentId?: EntityId;
  managerUserId?: EntityId;
  
  // Budget & Cost Center
  budgetCode?: string;
  costCenter?: string;
  
  // Settings
  isActive: boolean;
  maxEmployees?: number;
  
  // Contact
  phone?: string;
  email?: string;
  location?: string;
}
