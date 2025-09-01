/**
 * FormBuilder Model
 * Database table: formbuilder
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IFormBuilder {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  type?: string;
  label?: string;
  inputtype?: string;
  content?: string;
  isrequired?: number;
  sortorder?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateFormBuilder {
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