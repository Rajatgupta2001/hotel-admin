/**
 * FormBuilder Model Interfaces
 * Database table: formBuilder
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IFormBuilder {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  type?: string;
  label?: string;
  inputtype?: string;  // Default: text("'text'"
  content?: string;
  isrequired?: number;  // Default: 0
  sortorder?: number;  // Default: 0
  status: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateFormBuilder {
  hotelid: number;
  type?: string;
  label?: string;
  inputtype?: string;
  content?: string;
  isrequired?: number;
  sortorder?: number;
  status: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateFormBuilder {
  hotelid?: number;
  type?: string;
  label?: string;
  inputtype?: string;
  content?: string;
  isrequired?: number;
  sortorder?: number;
  status?: string;
  createdby?: number;
}
