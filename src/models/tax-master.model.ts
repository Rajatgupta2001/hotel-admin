/**
 * Tax Master Model
 */
export interface TaxMaster {
  id: number;
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
  createdby: number;
  status: string;
  shortorder?: number;
  modifiedby: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
}

export interface CreateTaxMaster {
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
  createdby: number;
  status: string;
  shortorder?: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
}

export interface UpdateTaxMaster {
  taxname?: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory?: string;
  taxdepartment?: string;
  taxtype?: string;
  chargetype?: string;
  tax?: number;
  description?: string;
  status?: string;
  shortorder?: number;
  modifiedby: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
}
