/**
 * RsvRmRateCodes Model Interfaces
 * Database table: rsvRmRateCodes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmRateCodes {
  id?: string;  // Primary key - auto-generated
  hotelid: string;  // Required
  rsvid: string;  // Required
  rateid: number;  // Required
  validdate: Date;  // Required
  rmtypeid: number;  // Required
  ratecode: number;  // Required
  inclratecode?: number;
  pkgdiscratecode?: number;
  pkgbulkdiscratecode?: number;
  postinclusivetax?: number;  // Default: 0
  ratemodifier?: number;  // Default: text("'0.000000'"
  ratemodifiertype?: string;  // Default: text("'FV'"
  servcdate?: Date;  // Service date
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

// Create interface - for new entity creation
export interface ICreateRsvRmRateCodes {
  hotelid: string;
  rsvid: string;
  rateid: number;
  validdate: Date;
  rmtypeid: number;
  ratecode: number;
  inclratecode?: number;
  pkgdiscratecode?: number;
  pkgbulkdiscratecode?: number;
  postinclusivetax?: number;
  ratemodifier?: number;
  ratemodifiertype?: string;
  createdby?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRsvRmRateCodes {
  hotelid?: string;
  rsvid?: string;
  rateid?: number;
  validdate?: Date;
  rmtypeid?: number;
  ratecode?: number;
  inclratecode?: number;
  pkgdiscratecode?: number;
  pkgbulkdiscratecode?: number;
  postinclusivetax?: number;
  ratemodifier?: number;
  ratemodifiertype?: string;
  createdby?: number;
}
