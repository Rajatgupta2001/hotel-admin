/**
 * WsCart Model
 * Database table: wscart
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWsCart {
  id?: string;  // Primary key - auto-generated
  apiid?: number;
  apichildid?: number;
  wsaccessid?: number;
  itemid?: number;
  itemtype?: Date;
  bookingdeposit?: number;
  ratecode?: string;
  servcdate?: Date;  // Service date - auto-populated
  bkchargetype?: string;
  bkdeposittype?: string;
  bkcharge?: number;
}

export interface ICreateWsCart {
  apiid?: number;
  apichildid?: number;
  wsaccessid?: number;
  itemid?: number;
  itemtype?: Date;
  bookingdeposit?: number;
  ratecode?: string;
  bkchargetype?: string;
  bkdeposittype?: string;
  bkcharge?: number;
}
export interface IUpdateWsCart {
  apiid?: number;
  apichildid?: number;
  wsaccessid?: number;
  itemid?: number;
  itemtype?: Date;
  bookingdeposit?: number;
  ratecode?: string;
  bkchargetype?: string;
  bkdeposittype?: string;
  bkcharge?: number;
}