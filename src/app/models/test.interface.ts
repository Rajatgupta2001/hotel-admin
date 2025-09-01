/**
 * Test Model
 * Database table: test
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITest {
  id?: number;  // Primary key - auto-generated
  mlos?: number;
  status?: string;
  createdon?: Date;  // Auto-populated timestamp
}

export interface ICreateTest {
  mlos?: number;
  status?: string;
}
export interface IUpdateTest {
  mlos?: number;
  status?: string;
}