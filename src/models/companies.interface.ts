/**
 * Companies Model
 * Database table: companies
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICompanies {
  id?: number;  // Primary key - auto-generated
  compname?: string;
  billingcompname?: string;
  complogo?: string;
  description?: string;
  vattype?: string;
  vatno?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  expirydays?: number;
  isalwaysactive?: number;  // Default: 0 (backend)
  gstin?: string;
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
}

export interface ICreateCompanies {
  compname?: string;
  billingcompname?: string;
  complogo?: string;
  description?: string;
  vattype?: string;
  vatno?: string;
  createdby?: number;
  expirydays?: number;
  isalwaysactive?: number;
  gstin?: string;
  status?: string;
  modifiedby?: number;
}
export interface IUpdateCompanies {
  compname?: string;
  billingcompname?: string;
  complogo?: string;
  description?: string;
  vattype?: string;
  vatno?: string;
  createdby?: number;
  expirydays?: number;
  isalwaysactive?: number;
  gstin?: string;
  status?: string;
  modifiedby?: number;
}