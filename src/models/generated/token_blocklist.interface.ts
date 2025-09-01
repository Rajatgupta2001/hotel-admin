/**
 * TokenBlocklist Model Interfaces
 * Database table: token_blocklist
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITokenBlocklist {
  id?: number;  // Primary key - auto-generated
  jti: string;  // Required
  tokenType: string;  // Required
  userId: number;  // Required
  createdAt: Date;  // Required
  expiresAt: Date;  // Required
  revokedBy?: number;
  revocationReason?: string;
}

// Create interface - for new entity creation
export interface ICreateTokenBlocklist {
  jti: string;
  tokenType: string;
  userId: number;
  createdAt: Date;
  expiresAt: Date;
  revokedBy?: number;
  revocationReason?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTokenBlocklist {
  jti?: string;
  tokenType?: string;
  userId?: number;
  createdAt?: Date;
  expiresAt?: Date;
  revokedBy?: number;
  revocationReason?: string;
}
