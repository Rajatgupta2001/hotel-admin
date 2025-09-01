/**
 * TaxMaster Model Interfaces
 * Database table: taxMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface ITaxMaster {
  id?: number;  // Primary key - auto-generated
  hotelid: number;  // Required
  taxname: string;  // Required
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory: string;  // Required
  taxdepartment?: string;  // Default: text("'TAX'"
  taxtype: string;  // Required
  chargetype: string;  // Required
  tax?: number;
  description: string;  // Required
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  status: string;  // Required
  shortorder?: number;  // Default: 0
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isslabbased?: number;  // Default: 0
  accountcodeid?: number;  // Default: 0
  istaxable?: number;  // Default: 0
  isalternate?: number;  // Default: 0
  hasrule?: number;  // Default: 0
  rule?: string;
  linepost?: number;  // Default: 0
}

// Create interface - for new entity creation
export interface ICreateTaxMaster {
  hotelid: number;
  taxname: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory: string;
  taxdepartment?: string;
  taxtype: string;
  chargetype: string;
  tax?: number;
  description: string;
  createdby?: number;
  status: string;
  shortorder?: number;
  modifiedby?: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateTaxMaster {
  hotelid?: number;
  taxname?: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory?: string;
  taxdepartment?: string;
  taxtype?: string;
  chargetype?: string;
  tax?: number;
  description?: string;
  createdby?: number;
  status?: string;
  shortorder?: number;
  modifiedby?: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
}
