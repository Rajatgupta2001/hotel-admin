/**
 * RoomTypes Model Interfaces
 * Database table: roomTypes
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRoomTypes {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  title: string;  // Required
  accronym: string;  // Required
  noofrooms: number;  // Required
  image: string;  // Required
  description: string;  // Required
  imagename?: string;
  isoverbookingalwd: number;  // Required
  overbookingvalue: number;  // Required
  overbookingtype: string;  // Required
  isgenderbase: number;  // Required
  gender?: number;
  stdoccupancy: number;  // Required
  higheroccupancy: number;  // Required
  maxadult?: number;
  maxchild?: number;
  isbedalwd: number;  // Required
  xtralwdbeds: number;  // Required
  taxapplicableon: string;  // Required
  shortorder?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  minwebrsvallowed?: number;  // Default: text("'1'"
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;  // Default: 0
  publishonweb?: number;  // Default: text("'1'"
  accountcodeid?: number;  // Default: 0
  type?: string;  // Default: text("'DV'"
  isderived?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRoomTypes {
  hotelid: number;
  title: string;
  accronym: string;
  noofrooms: number;
  image: string;
  description: string;
  imagename?: string;
  isoverbookingalwd: number;
  overbookingvalue: number;
  overbookingtype: string;
  isgenderbase: number;
  gender?: number;
  stdoccupancy: number;
  higheroccupancy: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd: number;
  xtralwdbeds: number;
  taxapplicableon: string;
  shortorder?: number;
  createdby?: number;
  status: string;
  modifiedby?: number;
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  type?: string;
  isderived?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRoomTypes {
  hotelid?: number;
  title?: string;
  accronym?: string;
  noofrooms?: number;
  image?: string;
  description?: string;
  imagename?: string;
  isoverbookingalwd?: number;
  overbookingvalue?: number;
  overbookingtype?: string;
  isgenderbase?: number;
  gender?: number;
  stdoccupancy?: number;
  higheroccupancy?: number;
  maxadult?: number;
  maxchild?: number;
  isbedalwd?: number;
  xtralwdbeds?: number;
  taxapplicableon?: string;
  shortorder?: number;
  createdby?: number;
  status?: string;
  modifiedby?: number;
  minwebrsvallowed?: number;
  minweboccu?: number;
  maxweboccu?: number;
  searchonminwebocc?: number;
  publishonweb?: number;
  accountcodeid?: number;
  type?: string;
  isderived?: number;
}
