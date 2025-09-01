/**
 * Test Model Interfaces
 * Database table: test
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITest {
  id?: number;  // Primary key - auto-generated
  mlos?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
}

// Create interface - for new entity creation
export interface ICreateTest {
  mlos?: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTest {
  mlos?: number;
  status?: string;
}
