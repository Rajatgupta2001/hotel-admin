/**
 * Companies Model Interfaces
 * Database table: companies
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICompanies {
  id?: number;  // Primary key - auto-generated
  compname: string;  // Required
  billingcompname?: string;
  complogo: string;  // Required
  description: string;  // Required
  vattype?: string;
  vatno?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  expirydays?: number;  // Default: text("'30'"
  isalwaysactive?: number;  // Default: 0
  gstin?: string;
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateCompanies {
  compname: string;
  billingcompname?: string;
  complogo: string;
  description: string;
  vattype?: string;
  vatno?: string;
  createdby?: number;
  expirydays?: number;
  isalwaysactive?: number;
  gstin?: string;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
