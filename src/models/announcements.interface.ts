/**
 * Announcements Model
 * Database table: announcements
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IAnnouncements {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title?: string;
  description?: string;
  displayfrom: Date;  // Required
  displaytill: Date;  // Required
  imagename?: string;
  adminconsolekeeper?: number;  // Default: 0 (backend)
  housekeeper?: number;  // Default: 0 (backend)
  frontdeskkeeper?: number;  // Default: 0 (backend)
  createdon?: Date;  // Auto-populated timestamp
  createdby: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: Date;  // Default: A (backend)
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby: number;  // User ID reference
  section?: string;
}

export interface ICreateAnnouncements {
  hotelid: number;
  title?: string;
  description?: string;
  displayfrom: Date;
  displaytill: Date;
  imagename?: string;
  adminconsolekeeper?: number;
  housekeeper?: number;
  frontdeskkeeper?: number;
  createdby?: number;
  status?: Date;
  modifiedby?: number;
  section?: string;
}
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
  status?: Date;
  modifiedby?: number;
  section?: string;
}