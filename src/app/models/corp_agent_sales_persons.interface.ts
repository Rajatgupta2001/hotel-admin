/**
 * CorpAgentSalesPersons Model
 * Database table: corpagentsalespersons
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ICorpAgentSalesPersons {
  id?: string;  // Primary key - auto-generated
  hotelid?: number;
  corptaid?: number;
  type?: string;
  userid?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  isdefault?: number;
}

export interface ICreateCorpAgentSalesPersons {
  hotelid?: number;
  corptaid?: number;
  type?: string;
  userid?: number;
  createdby?: number;
  isdefault?: number;
}
export interface IUpdateCorpAgentSalesPersons {
  hotelid?: number;
  corptaid?: number;
  type?: string;
  userid?: number;
  createdby?: number;
  isdefault?: number;
}