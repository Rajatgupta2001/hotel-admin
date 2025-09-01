/**
 * RouteData Model Interfaces
 * Database table: _routedata
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRouteData {
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
}

// Create interface - for new entity creation
export interface ICreateRouteData {
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
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRouteData {
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
}
