/**
 * AccountAttributes Model
 * Database table: accountattributes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAccountAttributes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  attributecode?: string;
  description?: string;
  status: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // Default: 0 (backend)
}

export interface ICreateAccountAttributes {
  hotelid: number;
  attributecode?: string;
  description?: string;
  status: string;
  createdby?: number;
  modifiedby?: number;
}

export interface IUpdateAccountAttributes {
  hotelid?: number;
  attributecode?: string;
  description?: string;
  status?: string;
  createdby?: number;
  modifiedby?: number;
}
