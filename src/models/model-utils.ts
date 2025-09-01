/**
 * Utility types and functions for Angular models converted from Python SQLAlchemy models
 */

// Common status type used across many models
export type ModelStatus = 'AC' | 'IA' | 'DE' | 'BL' | 'CA' | 'CO' | 'CHECKIN' | 'RESERVE' | 'BLOCKED' | 'CANCEL' | 'CHECKOUT';

// Common audit fields interface
export interface IAuditFields {
  id?: number;
  createdOn?: Date;
  createdBy?: number;
  modifiedOn?: Date;
  modifiedBy?: number;
  status?: ModelStatus;
}

// Hotel context interface - many models have hotelId
export interface IHotelContext {
  hotelId?: number;
  compId?: number;
}

// Pagination interface for API responses
export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Common response wrapper
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// Base model interface that combines common fields
export interface IBaseModel extends IAuditFields, IHotelContext {
  // Common fields that appear in most models
}

// Utility functions for model operations
export class ModelUtils {
  
  /**
   * Convert snake_case to camelCase
   */
  static toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
  }
  
  /**
   * Convert camelCase to snake_case
   */
  static toSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }
  
  /**
   * Check if a model is active
   */
  static isActive(model: IAuditFields): boolean {
    return model.status === 'AC';
  }
  
  /**
   * Check if a model is deleted
   */
  static isDeleted(model: IAuditFields): boolean {
    return model.status === 'DE';
  }
  
  /**
   * Format date for display
   */
  static formatDate(date: Date | string | null | undefined): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString();
  }
  
  /**
   * Format datetime for display
   */
  static formatDateTime(date: Date | string | null | undefined): string {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleString();
  }
  
  /**
   * Get status display text
   */
  static getStatusText(status: ModelStatus): string {
    const statusMap: Record<ModelStatus, string> = {
      'AC': 'Active',
      'IA': 'Inactive',
      'DE': 'Deleted',
      'BL': 'Blocked',
      'CA': 'Cancelled',
      'CO': 'Checkout',
      'CHECKIN': 'Checked In',
      'RESERVE': 'Reserved',
      'BLOCKED': 'Blocked',
      'CANCEL': 'Cancelled',
      'CHECKOUT': 'Checked Out'
    };
    return statusMap[status] || status;
  }
  
  /**
   * Clean model data for API submission (remove undefined/null values)
   */
  static cleanModelData<T extends Record<string, any>>(model: T): Partial<T> {
    const cleaned: Partial<T> = {};
    for (const [key, value] of Object.entries(model)) {
      if (value !== undefined && value !== null) {
        cleaned[key as keyof T] = value;
      }
    }
    return cleaned;
  }
  
  /**
   * Create a new model with audit fields
   */
  static createWithAudit<T extends IAuditFields>(
    modelData: Omit<T, keyof IAuditFields>,
    userId: number
  ): T {
    const now = new Date();
    return {
      ...modelData,
      createdOn: now,
      createdBy: userId,
      modifiedOn: now,
      modifiedBy: userId,
      status: 'AC' as ModelStatus
    } as T;
  }
  
  /**
   * Update model with audit fields
   */
  static updateWithAudit<T extends IAuditFields>(
    existingModel: T,
    updates: Partial<T>,
    userId: number
  ): T {
    return {
      ...existingModel,
      ...updates,
      modifiedOn: new Date(),
      modifiedBy: userId
    };
  }
}

// Type guards for model validation
export class ModelTypeGuards {
  
  static hasAuditFields(obj: any): obj is IAuditFields {
    return obj && typeof obj === 'object' && 
           'id' in obj && 'createdOn' in obj && 'createdBy' in obj;
  }
  
  static hasHotelContext(obj: any): obj is IHotelContext {
    return obj && typeof obj === 'object' && 'hotelId' in obj;
  }
  
  static isBaseModel(obj: any): obj is IBaseModel {
    return this.hasAuditFields(obj) && this.hasHotelContext(obj);
  }
}

// Enums for common model values
export enum ReservationStatus {
  CHECKIN = 'CHECKIN',
  RESERVE = 'RESERVE',
  BLOCKED = 'BLOCKED',
  CANCEL = 'CANCEL',
  CHECKOUT = 'CHECKOUT'
}

export enum PaymentType {
  CASH = 'CASH',
  CARD = 'CARD',
  CREDIT = 'CREDIT',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CHECK = 'CHECK',
  ONLINE = 'ONLINE'
}

export enum CustomerType {
  DIRECT = 'CUST_DI',
  RESELLER = 'CUST_RS'
}

export enum HotelMode {
  TRIAL = 'TRIAL',
  FREE = 'FREE',
  PAID = 'PAID'
}

// Form validation helpers
export class ModelValidators {
  
  static required(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }
  
  static email(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  static phone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }
  
  static positiveNumber(value: number): boolean {
    return typeof value === 'number' && value > 0;
  }
  
  static dateRange(startDate: Date, endDate: Date): boolean {
    return startDate <= endDate;
  }
}
