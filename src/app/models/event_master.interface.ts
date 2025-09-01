/**
 * EventMaster Model
 * Database table: eventmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}

export interface ICreateEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}
export interface IUpdateEventMaster {
  key?: string;
  title?: string;
  description?: string;
  fieldjson?: string;
  orderby?: number;
}