/**
 * AlphabetCodings Model Interfaces
 * Database table: alphabetCodings
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAlphabetCodings {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  travelagentcode?: string;
  corporatecode?: string;
  onlinewebcode?: string;
  assigncode?: string;
  otherbookingcode?: string;  // Default: text("'O'"
  groupbookingcode?: string;  // Default: text("'G'"
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status?: string;
}

// Create interface - for new entity creation
export interface ICreateAlphabetCodings {
  hotelid: number;
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

// Update interface - for entity updates (all fields optional)
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
