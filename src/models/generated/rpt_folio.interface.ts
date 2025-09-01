/**
 * RptFolio Model Interfaces
 * Database table: rpt_folio
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRptFolio {
  id?: number;  // Primary key - auto-generated
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  closedon?: Date;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
  rmcharge?: number;
  rmtax?: number;
  rmcustcharge?: number;
  rmcustchargetax?: number;
  pkginclcharge?: number;
  pkgincltax?: number;
  tariffdisc?: number;
  allowance?: number;
  cancellationcharge?: number;
  cancellationtax?: number;
  earlycheckincharge?: number;
  earlycheckintax?: number;
  noshowcharge?: number;
  noshowtax?: number;
  otherdiscount?: number;
  otherdiscdesc?: string;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: number;
  roomid?: number;
  noofadult?: number;
  noofchild?: number;
  naclosedon?: Date;
  foliono?: string;
  folioownerid?: number;
  folioownername?: string;
  customfoliono?: string;
}

// Create interface - for new entity creation
export interface ICreateRptFolio {
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  closedon?: Date;
  rmcharge?: number;
  rmtax?: number;
  rmcustcharge?: number;
  rmcustchargetax?: number;
  pkginclcharge?: number;
  pkgincltax?: number;
  tariffdisc?: number;
  allowance?: number;
  cancellationcharge?: number;
  cancellationtax?: number;
  earlycheckincharge?: number;
  earlycheckintax?: number;
  noshowcharge?: number;
  noshowtax?: number;
  otherdiscount?: number;
  otherdiscdesc?: string;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: number;
  roomid?: number;
  noofadult?: number;
  noofchild?: number;
  naclosedon?: Date;
  foliono?: string;
  folioownerid?: number;
  folioownername?: string;
  customfoliono?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRptFolio {
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  closedon?: Date;
  rmcharge?: number;
  rmtax?: number;
  rmcustcharge?: number;
  rmcustchargetax?: number;
  pkginclcharge?: number;
  pkgincltax?: number;
  tariffdisc?: number;
  allowance?: number;
  cancellationcharge?: number;
  cancellationtax?: number;
  earlycheckincharge?: number;
  earlycheckintax?: number;
  noshowcharge?: number;
  noshowtax?: number;
  otherdiscount?: number;
  otherdiscdesc?: string;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: number;
  roomid?: number;
  noofadult?: number;
  noofchild?: number;
  naclosedon?: Date;
  foliono?: string;
  folioownerid?: number;
  folioownername?: string;
  customfoliono?: string;
}
