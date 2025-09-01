/**
 * AdminSections Model Interfaces
 * Database table: adminSections
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAdminSections {
  id?: number;  // Primary key - auto-generated
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;  // Default: 'A'
  createdon?: Date;  // Auto-populated timestamp
  createdby?: Date;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateAdminSections {
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;
  createdby?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAdminSections {
  sectionname?: string;
  filename?: string;
  parentsection?: number;
  status?: string;
  createdby?: Date;
}
