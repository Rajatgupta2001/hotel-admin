/**
 * RptPostTransactions Model Interfaces
 * Database table: rpt_postTransactions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRptPostTransactions {
  id?: number;  // Primary key - auto-generated
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  effectivedate?: Date;
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
  otherdiscdesc?: number;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: string;
  rmtpname?: string;
  roomid?: string;
  roomname?: string;
  noofadult?: number;
  noofchild?: number;
  naposteddate?: Date;
  iscomplimentory?: number;
  isdayuse?: number;
  createdon?: Date;  // Auto-populated timestamp
  servcdate?: Date;  // Service date
}

// Create interface - for new entity creation
export interface ICreateRptPostTransactions {
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  effectivedate?: Date;
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
  otherdiscdesc?: number;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: string;
  rmtpname?: string;
  roomid?: string;
  roomname?: string;
  noofadult?: number;
  noofchild?: number;
  naposteddate?: Date;
  iscomplimentory?: number;
  isdayuse?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRptPostTransactions {
  rsvid?: number;
  hotelid?: number;
  regnumber?: string;
  groupid?: number;
  grpregnumber?: string;
  effectivedate?: Date;
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
  otherdiscdesc?: number;
  addonscharge?: number;
  addonstax?: number;
  fnbposcharges?: number;
  fnbpostax?: number;
  fbposcharges?: number;
  fbpostaxes?: number;
  otherposcharges?: number;
  otherpostaxes?: number;
  rmtpeid?: string;
  rmtpname?: string;
  roomid?: string;
  roomname?: string;
  noofadult?: number;
  noofchild?: number;
  naposteddate?: Date;
  iscomplimentory?: number;
  isdayuse?: number;
}
