/**
 * EventMediaIntegrationMaster Model
 * Database table: eventmediaintegrationmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEventMediaIntegrationMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  description?: string;
  mediatype?: string;
  status?: Date;
}

export interface ICreateEventMediaIntegrationMaster {
  title?: string;
  description?: string;
  mediatype?: string;
  status?: Date;
}
export interface IUpdateEventMediaIntegrationMaster {
  title?: string;
  description?: string;
  mediatype?: string;
  status?: Date;
}