/**
 * GuestService Model
 * Database table: guestservice
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGuestService {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  jobtypeid?: number;
  title?: string;
  description?: string;
  tat?: number;
  availfrom?: string;
  availto?: string;
  isguestfacing?: number;
  logoimage?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGuestService {
  hotelid?: number;
  jobtypeid?: number;
  title?: string;
  description?: string;
  tat?: number;
  availfrom?: string;
  availto?: string;
  isguestfacing?: number;
  logoimage?: string;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGuestService {
  hotelid?: number;
  jobtypeid?: number;
  title?: string;
  description?: string;
  tat?: number;
  availfrom?: string;
  availto?: string;
  isguestfacing?: number;
  logoimage?: string;
  createdby?: number;
  modifiedby?: number;
}