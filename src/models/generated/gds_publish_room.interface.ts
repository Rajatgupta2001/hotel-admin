/**
 * GdsPublishRoom Model Interfaces
 * Database table: gdsPublishRoom
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsPublishRoom {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  assocrmtypeid?: string;
  gdsid?: number;
  gdsminrooms?: number;  // Default: 0
  htminrooms?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  dynamicsyncmaxdate?: Date;
  allotmentsyncoff?: number;  // Default: 0
  restsyncoff?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateGdsPublishRoom {
  hotelid?: number;
  roomtypeid?: number;
  assocrmtypeid?: string;
  gdsid?: number;
  gdsminrooms?: number;
  htminrooms?: number;
  createdby?: number;
  dynamicsyncmaxdate?: Date;
  allotmentsyncoff?: number;
  restsyncoff?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateGdsPublishRoom {
  hotelid?: number;
  roomtypeid?: number;
  assocrmtypeid?: string;
  gdsid?: number;
  gdsminrooms?: number;
  htminrooms?: number;
  createdby?: number;
  dynamicsyncmaxdate?: Date;
  allotmentsyncoff?: number;
  restsyncoff?: number;
}
