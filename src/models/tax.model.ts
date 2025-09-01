/**
 * Tax Models
 */

export interface Tax {
  id: number;
  hotelid: number;
  taxname: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory: any;
  taxdepartment?: any;
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

export interface CreateTax {
  hotelid: number;
  taxname: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory: any;
  taxdepartment?: any;
  taxtype: string;
  chargetype: string;
  tax?: number;
  description: string;
  status: string;
  shortorder?: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
  createdby?: number;
  modifiedby?: number;
}

export interface UpdateTax {
  taxname?: string;
  taxshortname?: string;
  taxappliedon?: string;
  taxcategory?: any;
  taxdepartment?: any;
  taxtype?: string;
  chargetype?: string;
  tax?: number;
  description?: string;
  status?: string;
  shortorder?: number;
  isslabbased?: number;
  accountcodeid?: number;
  istaxable?: number;
  isalternate?: number;
  hasrule?: number;
  rule?: string;
  linepost?: number;
  modifiedby?: number;
}
