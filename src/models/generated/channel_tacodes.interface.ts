/**
 * ChannelTacodes Model Interfaces
 * Database table: channelTACodes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IChannelTacodes {
  id?: number;  // Primary key - auto-generated
  gdstype: string;  // Required
  code: string;  // Required
  name?: string;
  desc?: string;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateChannelTacodes {
  gdstype: string;
  code: string;
  name?: string;
  desc?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateChannelTacodes {
  gdstype?: string;
  code?: string;
  name?: string;
  desc?: string;
}
