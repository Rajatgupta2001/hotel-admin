/**
 * PaymentGatewayMaster Model Interfaces
 * Database table: paymentGatewayMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IPaymentGatewayMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  description?: string;
  supportedintegrationtype: number;  // Required
  status?: string;  // Default: 'A'
}

// Create interface - for new entity creation
export interface ICreatePaymentGatewayMaster {
  title?: string;
  description?: string;
  supportedintegrationtype: number;
  status?: string;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdatePaymentGatewayMaster {
  title?: string;
  description?: string;
  supportedintegrationtype?: number;
  status?: string;
}
