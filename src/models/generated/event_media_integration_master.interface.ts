/**
 * EventMediaIntegrationMaster Model Interfaces
 * Database table: eventMediaIntegrationMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IEventMediaIntegrationMaster {
  id?: number;  // Primary key - auto-generated
  title: string;  // Required
  description?: string;
  mediatype?: string;
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreateEventMediaIntegrationMaster {
  title: string;
  description?: string;
  mediatype?: string;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateEventMediaIntegrationMaster {
  title?: string;
  description?: string;
  mediatype?: string;
  status?: string;
}
