/**
 * AccountMapper Model Interfaces
 * Database table: accountMapper
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAccountMapper {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  maptype?: string;
  localaccountcode: string;  // Required
  remoteaccountcode: string;  // Required
  updated?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;  // Default: text("''"
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}

// Create interface - for new entity creation
export interface ICreateAccountMapper {
  hotelid: number;
  maptype?: string;
  localaccountcode: string;
  remoteaccountcode: string;
  updated?: Date;
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAccountMapper {
  hotelid?: number;
  maptype?: string;
  localaccountcode?: string;
  remoteaccountcode?: string;
  updated?: Date;
  remoteaccountextra?: string;
  refid?: number;
  reftype?: string;
  subrefid?: number;
  subreftype?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  customaccountname?: string;
}
