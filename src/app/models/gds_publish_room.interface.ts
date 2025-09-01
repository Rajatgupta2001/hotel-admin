/**
 * GdsPublishRoom Model
 * Database table: gdspublishroom
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsPublishRoom {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  roomtypeid?: number;
  assocrmtypeid?: string;
  gdsid?: number;
  gdsminrooms?: number;
  htminrooms?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  dynamicsyncmaxdate?: Date;
  allotmentsyncoff?: number;
  restsyncoff?: number;
}

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