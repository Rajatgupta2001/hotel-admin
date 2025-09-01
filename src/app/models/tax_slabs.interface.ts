/**
 * TaxSlabs Model
 * Database table: taxslabs
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
import { ITaxMaster } from './tax_master.interface';
export interface ITaxSlabs {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  taxid?: number;
  slabamount?: number;
  tax?: number;
  taxappliedon?: string;
  chargetype?: string;
  activationdate?: Date;
  status?: string;
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  accountcodeid?: number;
  taxmaster?: ITaxMaster;
}

export interface ICreateTaxSlabs {
  hotelid?: number;
  taxid?: number;
  slabamount?: number;
  tax?: number;
  taxappliedon?: string;
  chargetype?: string;
  activationdate?: Date;
  status?: string;
  createdby?: number;
  accountcodeid?: number;
  taxmaster?: ITaxMaster;
}
export interface IUpdateTaxSlabs {
  hotelid?: number;
  taxid?: number;
  slabamount?: number;
  tax?: number;
  taxappliedon?: string;
  chargetype?: string;
  activationdate?: Date;
  status?: string;
  createdby?: number;
  accountcodeid?: number;
  taxmaster?: ITaxMaster;
}