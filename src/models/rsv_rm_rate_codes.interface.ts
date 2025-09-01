/**
 * RsvRmRateCodes Model
 * Database table: rsvrmratecodes
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmRateCodes {
  id?: string;  // Primary key - auto-generated
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
  servcdate?: Date;  // Service date - auto-populated
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
}

export interface ICreateRsvRmRateCodes {
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