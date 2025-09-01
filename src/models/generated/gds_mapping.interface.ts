/**
 * GdsMapping Model Interfaces
 * Database table: gdsMapping
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsMapping {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  gdsid?: string;
  agentid?: string;
  synctype?: string;  // Default: text("'RATE'"
  dessyscode?: string;
  usedessyscode?: number;  // Default: 0
  commtypetp?: number;  // Default: 0
  commval?: number;
  commtype?: string;
  comminctax?: number;
  channeltaid?: number;
  businesssrcid?: number;
  status?: string;  // Default: 'A'
  iscrs?: number;  // Default: 0
  issupplierrate?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
}

// Create interface - for new entity creation
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
  status?: string;
  iscrs?: number;
  issupplierrate?: number;
  createdby?: number;
  modifiedby?: number;
}

// Update interface - for entity updates (all fields optional)
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
  status?: string;
  iscrs?: number;
  issupplierrate?: number;
  createdby?: number;
  modifiedby?: number;
}
