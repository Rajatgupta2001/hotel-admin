/**
 * TaxGroups Model Interfaces
 * Database table: taxGroups
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxGroups {
  id?: string;  // Primary key - auto-generated
  hotelid: number;  // Required
  groupname: string;  // Required
  groupdesc?: string;
  status?: string;  // Default: 'A'
  shortorder?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateTaxGroups {
  hotelid: number;
  groupname: string;
  groupdesc?: string;
  status?: string;
  shortorder?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxGroups {
  hotelid?: number;
  groupname?: string;
  groupdesc?: string;
  status?: string;
  shortorder?: number;
  createdby?: number;
  modifiedby?: number;
}
