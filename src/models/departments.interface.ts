/**
 * Departments Model
 * Database table: departments
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IDepartments {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  deptname?: string;
  shortname?: string;
  description?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  isreadonly?: number;  // Default: 0 (backend)
}

export interface ICreateDepartments {
  hotelid: number;
  deptname?: string;
  shortname?: string;
  description?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  isreadonly?: number;
}
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