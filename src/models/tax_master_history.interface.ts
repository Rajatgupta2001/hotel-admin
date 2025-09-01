import type { ITaxMaster } from './tax_master.interface';
/**
 * TaxMasterHistory Model
 * Database table: taxmasterhistory
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxMasterHistory {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  refid?: number;
  taxname?: string;
  taxcategory?: string;
  taxtype?: string;
  chargetype?: string;
  tax?: number;
  description?: string;
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  servmdate?: Date;
}

export interface ICreateTaxMasterHistory {
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