/**
 * RouteDataNew Model Interfaces
 * Database table: _routedataNew
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRouteDataNew {
  hotelid?: number;
  customid?: number;
  customrsvid?: number;
  customtransType?: string;
  customposId?: number;
  refTransId?: number;
  id?: number;
  rsvid?: number;
  transtype?: string;
  posid?: number;
  pkgid?: number;
  parentrefid?: number;
  otherposprid?: number;
  status?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateRouteDataNew {
  hotelid?: number;
  customid?: number;
  customrsvid?: number;
  customtransType?: string;
  customposId?: number;
  refTransId?: number;
  id?: number;
  rsvid?: number;
  transtype?: string;
  posid?: number;
  pkgid?: number;
  parentrefid?: number;
  otherposprid?: number;
  status?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRouteDataNew {
  hotelid?: number;
  customid?: number;
  customrsvid?: number;
  customtransType?: string;
  customposId?: number;
  refTransId?: number;
  id?: number;
  rsvid?: number;
  transtype?: string;
  posid?: number;
  pkgid?: number;
  parentrefid?: number;
  otherposprid?: number;
  status?: number;
}
