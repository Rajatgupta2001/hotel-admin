/**
 * MailInclusions Model Interfaces
 * Database table: mailInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IMailInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  code: string;  // Required
  title: string;  // Required
  content: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateMailInclusions {
  hotelid: number;
  code: string;
  title: string;
  content: string;
  createdby?: number;
  status: string;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateMailInclusions {
  hotelid?: number;
  code?: string;
  title?: string;
  content?: string;
  createdby?: number;
  status?: string;
  modifiedby?: number;
}
