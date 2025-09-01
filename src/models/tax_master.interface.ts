import type { ITaxSlabs } from './tax_slabs.interface';
import type { IRmApplicableTaxes } from './rm_applicable_taxes.interface';
import type { IPosProdTaxes } from './pos_prod_taxes.interface';
/**
 * TaxMaster Model
 * Database table: taxmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface ITaxMaster {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  status?: string;
  shortorder?: number;
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
  taxslabs?: ITaxSlabs;
  rmApplicableTaxes?: IRmApplicableTaxes;
  posProdTaxes?: IPosProdTaxes;
}

export interface ICreateTaxMaster {
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
  taxslabs?: ITaxSlabs;
  rmApplicableTaxes?: IRmApplicableTaxes;
  posProdTaxes?: IPosProdTaxes;
}
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
  taxslabs?: ITaxSlabs;
  rmApplicableTaxes?: IRmApplicableTaxes;
  posProdTaxes?: IPosProdTaxes;
}