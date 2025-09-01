/**
 * CashCounters Model Interfaces
 * Database table: cashCounters
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ICashCounters {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  counterstatus: number;  // Required
  description: string;  // Required
  nadate?: Date;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  status: string;  // Required
  loggedin?: number;  // Default: 0
  loggedinuser?: number;  // Default: 0
  lastopenedon?: Date;
  lastclosedon?: Date;
  islogoutfromfrontdeskstartedby?: number;  // Default: 0
  logoutfrontdeskfromtime?: Date;
}

// Create interface - for new entity creation
export interface ICreateCashCounters {
  hotelid: number;
  title: string;
  counterstatus: number;
  description: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status: string;
  loggedin?: number;
  loggedinuser?: number;
  lastopenedon?: Date;
  lastclosedon?: Date;
  islogoutfromfrontdeskstartedby?: number;
  logoutfrontdeskfromtime?: Date;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateCashCounters {
  hotelid?: number;
  title?: string;
  counterstatus?: number;
  description?: string;
  nadate?: Date;
  createdby?: number;
  modifiedby?: number;
  status?: string;
  loggedin?: number;
  loggedinuser?: number;
  lastopenedon?: Date;
  lastclosedon?: Date;
  islogoutfromfrontdeskstartedby?: number;
  logoutfrontdeskfromtime?: Date;
}
