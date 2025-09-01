/**
 * GdsMaster Model
 * Database table: gdsmaster
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IGdsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdshotelid?: string;
  gdsusername?: string;
  gdspass?: string;
  gdskey?: string;
  gdstype?: string;
  gdsname?: string;
  gdsdesc?: string;
  fixedcommission?: number;
  percommission?: number;
  availabilitytype?: string;
  iscontractalloted?: number;
  ignorecheckcontractbreach?: number;
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: string;
  pernightpriceonbilling?: number;
  pernightpriceonbillingtype?: string;
  dynamicallocation?: number;
  minnoofroom?: number;
  mode?: string;
  hotelemails?: string;
  othrsourceflag?: number;
  othrsourcedata?: string;
  payterm?: string;
  removetreeboint?: number;
}

export interface ICreateGdsMaster {
  hotelid?: number;
  gdshotelid?: string;
  gdsusername?: string;
  gdspass?: string;
  gdskey?: string;
  gdstype?: string;
  gdsname?: string;
  gdsdesc?: string;
  fixedcommission?: number;
  percommission?: number;
  availabilitytype?: string;
  iscontractalloted?: number;
  ignorecheckcontractbreach?: number;
  status?: string;
  pernightpriceonbilling?: number;
  pernightpriceonbillingtype?: string;
  dynamicallocation?: number;
  minnoofroom?: number;
  mode?: string;
  hotelemails?: string;
  othrsourceflag?: number;
  othrsourcedata?: string;
  payterm?: string;
  removetreeboint?: number;
}
export interface IUpdateGdsMaster {
  hotelid?: number;
  gdshotelid?: string;
  gdsusername?: string;
  gdspass?: string;
  gdskey?: string;
  gdstype?: string;
  gdsname?: string;
  gdsdesc?: string;
  fixedcommission?: number;
  percommission?: number;
  availabilitytype?: string;
  iscontractalloted?: number;
  ignorecheckcontractbreach?: number;
  status?: string;
  pernightpriceonbilling?: number;
  pernightpriceonbillingtype?: string;
  dynamicallocation?: number;
  minnoofroom?: number;
  mode?: string;
  hotelemails?: string;
  othrsourceflag?: number;
  othrsourcedata?: string;
  payterm?: string;
  removetreeboint?: number;
}