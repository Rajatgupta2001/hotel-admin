/**
 * ApiResourceMaster Model
 * Database table: apiresourcemaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IApiResourceMaster {
  id?: string;  // Primary key - auto-generated
  module?: string;
  actcontroller?: string;
  controller?: string;
  action?: string;
  createdby?: number;  // User ID reference
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date - auto-populated
}

export interface ICreateApiResourceMaster {
  module?: string;
  actcontroller?: string;
  controller?: string;
  action?: string;
  createdby?: number;
}
export interface IUpdateApiResourceMaster {
  module?: string;
  actcontroller?: string;
  controller?: string;
  action?: string;
  createdby?: number;
}