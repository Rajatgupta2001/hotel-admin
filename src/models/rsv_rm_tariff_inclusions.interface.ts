import type { IRsvRmTariff } from './rsv_rm_tariff.interface';
import type { IReservation } from './reservations.interface';
/**
 * RsvRmTariffInclusions Model
 * Database table: rsvrmtariffinclusions
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRsvRmTariffInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  inclgrpid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: Date;
  totalPrice?: Date;
  discount?: Date;
  discounttype?: string;
  amount?: Date;
  tax?: Date;
  netTotal?: Date;
  fee?: Date;
  servcdate?: Date;  // Service date - auto-populated
  isprint?: number;
  islocked?: number;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;
  isquantitybased?: number;
  actinvoiceid?: number;
  actinvoiceismain?: number;
  daypost?: number;
  reservation?: IReservation;
}

export interface ICreateRsvRmTariffInclusions {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  inclgrpid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: Date;
  totalPrice?: Date;
  discount?: Date;
  discounttype?: string;
  amount?: Date;
  tax?: Date;
  netTotal?: Date;
  fee?: Date;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
  isquantitybased?: number;
  actinvoiceid?: number;
  actinvoiceismain?: number;
  daypost?: number;
  reservation?: IReservation;
}
export interface IUpdateRsvRmTariffInclusions {
  hotelid?: number;
  rsvid?: number;
  rsvrmid?: number;
  rsvrmtariffid?: number;
  inclgrpid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate?: Date;
  todate?: Date;
  unitPrice?: Date;
  totalPrice?: Date;
  discount?: Date;
  discounttype?: string;
  amount?: Date;
  tax?: Date;
  netTotal?: Date;
  fee?: Date;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
  isquantitybased?: number;
  actinvoiceid?: number;
  actinvoiceismain?: number;
  daypost?: number;
  reservation?: IReservation;
}