/**
 * SuperUserPermissions Model
 * Database table: superuserpermissions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ISuperUserPermissions {
  id?: string;  // Primary key - auto-generated
  compid?: number;
  userid?: number;
  cancreatehotel?: number;
  cancreateadminuser?: number;
  cancreatesuperuser?: number;
  companydetailpermission?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

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