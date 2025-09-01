/**
 * SuperUserPermissions Model Interfaces
 * Database table: superUserPermissions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ISuperUserPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  cancreatehotel?: number;  // Default: 0
  cancreateadminuser?: number;  // Default: 0
  cancreatesuperuser?: number;  // Default: 0
  companydetailpermission?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateSuperUserPermissions {
  compid?: number;
  userid?: number;
  cancreatehotel?: number;
  cancreateadminuser?: number;
  cancreatesuperuser?: number;
  companydetailpermission?: string;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateSuperUserPermissions {
  compid?: number;
  userid?: number;
  cancreatehotel?: number;
  cancreateadminuser?: number;
  cancreatesuperuser?: number;
  companydetailpermission?: string;
  createdby?: number;
  modifiedby?: number;
}
