/**
 * ChannelManagers Model Interfaces
 * Database table: channelManagers
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChannelManagers {
  id?: number;  // Primary key - auto-generated
  name: string;  // Required
  code: string;  // Required
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;  // Default: 0
  mode?: number;  // Default: 0
  testgdshotelid?: string;  // Default: text("'111111'"
  isdailyrate?: number;  // Default: 0
  username?: string;
  password?: string;
  ip?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  updatedby?: number;  // Default: 0
  isaddons?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateChannelManagers {
  name: string;
  code: string;
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;
  mode?: number;
  testgdshotelid?: string;
  isdailyrate?: number;
  username?: string;
  password?: string;
  ip?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isaddons?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateChannelManagers {
  name?: string;
  code?: string;
  description?: string;
  ratetesturl?: string;
  rateliveurl?: string;
  ruletesturl?: string;
  ruleliveurl?: string;
  allottesturl?: string;
  allotliveurl?: string;
  supportedmods?: number;
  mode?: number;
  testgdshotelid?: string;
  isdailyrate?: number;
  username?: string;
  password?: string;
  ip?: string;
  createdby?: number;
  updatedon?: Date;
  updatedby?: number;
  isaddons?: number;
}
