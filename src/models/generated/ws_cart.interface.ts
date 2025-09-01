/**
 * WsCart Model Interfaces
 * Database table: wsCart
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWsCart {
  id?: string;  // Primary key - auto-generated
  apiid: number;  // Required
  apichildid: number;  // Required
  wsaccessid: number;  // Required
  itemid: number;  // Required
  itemtype?: string;  // Default: text("'RSV'"
  bookingdeposit?: number;
  ratecode?: string;
  servcdate?: Date;  // Service date
  bkchargetype: string;  // Required
  bkdeposittype: string;  // Required
  bkcharge: number;  // Required
}

// Create interface - for new entity creation
export interface ICreateWsCart {
  apiid: number;
  apichildid: number;
  wsaccessid: number;
  itemid: number;
  itemtype?: string;
  bookingdeposit?: number;
  ratecode?: string;
  bkchargetype: string;
  bkdeposittype: string;
  bkcharge: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWsCart {
  apiid?: number;
  apichildid?: number;
  wsaccessid?: number;
  itemid?: number;
  itemtype?: string;
  bookingdeposit?: number;
  ratecode?: string;
  bkchargetype?: string;
  bkdeposittype?: string;
  bkcharge?: number;
}
