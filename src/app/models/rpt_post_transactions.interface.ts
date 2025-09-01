/**
 * RptPostTransactions Model
 * Database table: rptposttransactions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
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
  servcdate?: Date;  // Service date - auto-populated
}

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