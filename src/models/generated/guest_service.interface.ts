/**
 * GuestService Model Interfaces
 * Database table: guestService
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGuestService {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  jobtypeid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  tat?: number;  // Default: text("'5'"
  availfrom?: string;
  availto?: string;
  isguestfacing?: number;  // Default: 0
  logoimage?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateGuestService {
  hotelid: number;
  jobtypeid: number;
  title: string;
  description: string;
  tat?: number;
  availfrom?: string;
  availto?: string;
  isguestfacing?: number;
  logoimage?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
