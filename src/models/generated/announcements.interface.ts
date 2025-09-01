/**
 * Announcements Model Interfaces
 * Database table: announcements
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IAnnouncements {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  description: string;  // Required
  displayfrom: Date;  // Required
  displaytill: Date;  // Required
  imagename: string;  // Required
  adminconsolekeeper?: number;  // Default: 0
  housekeeper?: number;  // Default: 0
  frontdeskkeeper?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status?: string;  // Default: 'A'
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  section: string;  // Required
}

// Create interface - for new entity creation
export interface ICreateAnnouncements {
  hotelid: number;
  title: string;
  description: string;
  displayfrom: Date;
  displaytill: Date;
  imagename: string;
  adminconsolekeeper?: number;
  housekeeper?: number;
  frontdeskkeeper?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  section: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateAnnouncements {
  hotelid?: number;
  title?: string;
  description?: string;
  displayfrom?: Date;
  displaytill?: Date;
  imagename?: string;
  adminconsolekeeper?: number;
  housekeeper?: number;
  frontdeskkeeper?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  section?: string;
}
