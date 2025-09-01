/**
 * DeleteTest Model Interfaces
 * Database table: DeleteTest
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IDeleteTest {
  id?: number;  // Primary key - auto-generated
  name?: string;
}

// Create interface - for new entity creation
export interface ICreateDeleteTest {
  name?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateDeleteTest {
  name?: string;
}
