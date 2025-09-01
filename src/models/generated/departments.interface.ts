/**
 * Departments Model Interfaces
 * Database table: departments
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDepartments {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  deptname: string;  // Required
  shortname: string;  // Required
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isreadonly?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateDepartments {
  hotelid: number;
  deptname: string;
  shortname: string;
  description: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
  isreadonly?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDepartments {
  hotelid?: number;
  deptname?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  isreadonly?: number;
}
