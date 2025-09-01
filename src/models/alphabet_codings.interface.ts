/**
 * AlphabetCodings Model
 * Database table: alphabetcodings
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAlphabetCodings {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  travelagentcode?: string;
  corporatecode?: string;
  onlinewebcode?: string;
  assigncode?: string;
  otherbookingcode?: string;
  groupbookingcode?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

export interface ICreateAlphabetCodings {
  hotelid?: number;
  travelagentcode?: string;
  corporatecode?: string;
  onlinewebcode?: string;
  assigncode?: string;
  otherbookingcode?: string;
  groupbookingcode?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}
export interface IUpdateAlphabetCodings {
  hotelid?: number;
  travelagentcode?: string;
  corporatecode?: string;
  onlinewebcode?: string;
  assigncode?: string;
  otherbookingcode?: string;
  groupbookingcode?: string;
  createdby?: number;
  modifiedby?: number;
  status?: string;
}