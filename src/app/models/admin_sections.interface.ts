/**
 * AdminSections Model
 * Database table: adminsections
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAdminSections {
  id?: number;  // Primary key - auto-generated
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
}

export interface ICreateAdminSections {
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;
  createdby?: Date;
}
export interface IUpdateAdminSections {
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;
  createdby?: Date;
}