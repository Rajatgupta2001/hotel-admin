/**
 * TokenBlocklist Model
 * Database table: tokenblocklist
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITokenBlocklist {
  id?: number;  // Primary key - auto-generated
  jti?: string;
  tokenType?: string;
  userId?: number;
  createdAt?: Date;
  expiresAt?: Date;
  revokedBy?: number;
  revocationReason?: string;
}

export interface ICreateTokenBlocklist {
  jti?: string;
  tokenType?: string;
  userId?: number;
  createdAt?: Date;
  expiresAt?: Date;
  revokedBy?: number;
  revocationReason?: string;
}
export interface IUpdateTokenBlocklist {
  jti?: string;
  tokenType?: string;
  userId?: number;
  createdAt?: Date;
  expiresAt?: Date;
  revokedBy?: number;
  revocationReason?: string;
}