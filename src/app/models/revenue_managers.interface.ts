/**
 * RevenueManagers Model
 * Database table: revenuemanagers
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IRevenueManagers {
  id?: number;  // Primary key - auto-generated
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
  status?: Date;
  createdon?: Date;  // Auto-populated timestamp
  updatedon?: Date;
  rsvrateinvflag?: number;
}

export interface ICreateRevenueManagers {
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
  status?: Date;
  updatedon?: Date;
  rsvrateinvflag?: number;
}
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
  status?: Date;
  updatedon?: Date;
  rsvrateinvflag?: number;
}