/**
 * GdsMapping Model
 * Database table: gdsmapping
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsMapping {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: string;
  agentid?: string;
  synctype?: string;
  dessyscode?: string;
  usedessyscode?: number;
  commtypetp?: number;
  commval?: number;
  commtype?: string;
  comminctax?: number;
  channeltaid?: number;
  businesssrcid?: number;
  status?: Date;
  iscrs?: number;
  issupplierrate?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

export interface ICreateGdsMapping {
  hotelid?: number;
  gdsid?: string;
  agentid?: string;
  synctype?: string;
  dessyscode?: string;
  usedessyscode?: number;
  commtypetp?: number;
  commval?: number;
  commtype?: string;
  comminctax?: number;
  channeltaid?: number;
  businesssrcid?: number;
  status?: Date;
  iscrs?: number;
  issupplierrate?: number;
  createdby?: number;
  modifiedby?: number;
}
export interface IUpdateGdsMapping {
  hotelid?: number;
  gdsid?: string;
  agentid?: string;
  synctype?: string;
  dessyscode?: string;
  usedessyscode?: number;
  commtypetp?: number;
  commval?: number;
  commtype?: string;
  comminctax?: number;
  channeltaid?: number;
  businesssrcid?: number;
  status?: Date;
  iscrs?: number;
  issupplierrate?: number;
  createdby?: number;
  modifiedby?: number;
}