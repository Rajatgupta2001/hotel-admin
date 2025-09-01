/**
 * RevenueManagers Model Interfaces
 * Database table: revenueManagers
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IRevenueManagers {
  id?: number;  // Primary key - auto-generated
  name: string;  // Required
  description?: string;
  code: string;  // Required
  username?: string;
  password?: string;
  hlxusername?: string;
  hlxpassword?: string;
  sendbookingurl?: string;
  inventoryurl?: string;
  ratecallbackurl?: string;
  testhotelids?: string;
  status?: string;  // Default: text("'I'"
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;  // Default: text("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
  rsvrateinvflag?: number;  // Default: text("'7'"
}

// Create interface - for new entity creation
export interface ICreateRevenueManagers {
  name: string;
  description?: string;
  code: string;
  username?: string;
  password?: string;
  hlxusername?: string;
  hlxpassword?: string;
  sendbookingurl?: string;
  inventoryurl?: string;
  ratecallbackurl?: string;
  testhotelids?: string;
  status?: string;
  updatedon?: Date;
  rsvrateinvflag?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateRevenueManagers {
  name?: string;
  description?: string;
  code?: string;
  username?: string;
  password?: string;
  hlxusername?: string;
  hlxpassword?: string;
  sendbookingurl?: string;
  inventoryurl?: string;
  ratecallbackurl?: string;
  testhotelids?: string;
  status?: string;
  updatedon?: Date;
  rsvrateinvflag?: number;
}
