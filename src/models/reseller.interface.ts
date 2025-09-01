/**
 * Reseller Model
 * Database table: reseller
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IReseller {
  id?: number;  // Primary key - auto-generated
  regnumber?: string;
  codeno?: string;
  businessname?: string;
  billingcompname?: string;
  gstin?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateReseller {
  regnumber?: string;
  codeno?: string;
  businessname?: string;
  billingcompname?: string;
  gstin?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateReseller {
  regnumber?: string;
  codeno?: string;
  businessname?: string;
  billingcompname?: string;
  gstin?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}