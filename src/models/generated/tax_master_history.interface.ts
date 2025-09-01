/**
 * TaxMasterHistory Model Interfaces
 * Database table: taxMasterHistory
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxMasterHistory {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  refid: number;  // Required
  taxname: string;  // Required
  taxcategory: string;  // Required
  taxtype: string;  // Required
  chargetype: string;  // Required
  tax?: number;
  description: string;  // Required
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  servmdate?: Date;
}

// Create interface - for new entity creation
export interface ICreateTaxMasterHistory {
  hotelid: number;
  refid: number;
  taxname: string;
  taxcategory: string;
  taxtype: string;
  chargetype: string;
  tax?: number;
  description: string;
  status: string;
  modifiedby?: number;
  servmdate?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxMasterHistory {
  hotelid?: number;
  refid?: number;
  taxname?: string;
  taxcategory?: string;
  taxtype?: string;
  chargetype?: string;
  tax?: number;
  description?: string;
  status?: string;
  modifiedby?: number;
  servmdate?: Date;
}
