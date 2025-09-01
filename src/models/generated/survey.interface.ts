/**
 * Survey Model Interfaces
 * Database table: survey
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISurvey {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  status?: string;  // Default: 'A'
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateSurvey {
  hotelid?: number;
  status?: string;
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSurvey {
  hotelid?: number;
  status?: string;
  reftype?: string;
  refid?: number;
  type?: string;
  createdby?: number;
  modifiedby?: number;
}
