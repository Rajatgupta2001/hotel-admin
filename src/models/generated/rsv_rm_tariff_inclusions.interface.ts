/**
 * RsvRmTariffInclusions Model Interfaces
 * Database table: rsvRmTariffInclusions
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRsvRmTariffInclusions {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  rsvid: number;  // Required
  rsvrmid: number;  // Required
  rsvrmtariffid: number;  // Required
  inclgrpid?: number;  // Default: 0
  inclid?: number;  // Default: 0
  prodid?: number;  // Default: 0
  allocationqty?: number;  // Default: 0
  fromdate: Date;  // Required
  todate: Date;  // Required
  unitPrice?: string;  // Default: 0.0
  totalPrice?: string;  // Default: 0.0
  discount?: string;  // Default: 0.0
  discounttype?: string;  // Default: ''
  amount?: string;  // Default: 0.0
  tax?: string;  // Default: 0.0
  netTotal?: string;  // Default: 0.0
  fee?: string;  // Default: 0.0
  servcdate?: Date;  // Service date
  isprint?: number;  // Default: 0
  islocked?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  counterid?: number;  // Default: 0
  isquantitybased?: number;  // Default: 0
  actinvoiceid?: number;  // Default: 0
  actinvoiceismain?: number;  // Default: 0
  daypost?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRsvRmTariffInclusions {
  hotelid: number;
  rsvid: number;
  rsvrmid: number;
  rsvrmtariffid: number;
  inclgrpid?: number;
  inclid?: number;
  prodid?: number;
  allocationqty?: number;
  fromdate: Date;
  todate: Date;
  unitPrice?: string;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
  isquantitybased?: number;
  actinvoiceid?: number;
  actinvoiceismain?: number;
  daypost?: number;
}

// Update interface - for entity updates (all fields optional)
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
  unitPrice?: string;
  totalPrice?: string;
  discount?: string;
  discounttype?: string;
  amount?: string;
  tax?: string;
  netTotal?: string;
  fee?: string;
  isprint?: number;
  islocked?: number;
  createdby?: number;
  counterid?: number;
  isquantitybased?: number;
  actinvoiceid?: number;
  actinvoiceismain?: number;
  daypost?: number;
}
