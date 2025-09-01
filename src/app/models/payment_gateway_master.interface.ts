/**
 * PaymentGatewayMaster Model
 * Database table: paymentgatewaymaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IPaymentGatewayMaster {
  id?: number;  // Primary key - auto-generated
  title?: string;
  description?: string;
  supportedintegrationtype?: number;
  status?: string;
}

export interface ICreatePaymentGatewayMaster {
  title?: string;
  description?: string;
  supportedintegrationtype?: number;
  status?: string;
}
export interface IUpdatePaymentGatewayMaster {
  title?: string;
  description?: string;
  supportedintegrationtype?: number;
  status?: string;
}