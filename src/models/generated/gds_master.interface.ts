/**
 * GdsMaster Model Interfaces
 * Database table: gdsMaster
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IGdsMaster {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  gdshotelid?: string;  // Default: 0
  gdsusername?: string;
  gdspass?: string;
  gdskey?: string;
  gdstype?: string;
  gdsname?: string;
  gdsdesc?: string;
  fixedcommission?: number;  // Default: text("'0.000000'"
  percommission?: number;  // Default: text("'0.000000'"
  availabilitytype?: string;  // Default: text("'RATE'"
  iscontractalloted?: number;  // Default: 0
  ignorecheckcontractbreach?: number;  // Default: 0
  createdon?: Date;  // Auto-populated timestamp
  modifiedon?: Date;  // Auto-populated timestamp
  status?: string;
  pernightpriceonbilling?: number;  // Default: text("'0.000000'"
  pernightpriceonbillingtype?: string;
  dynamicallocation?: number;  // Default: 0
  minnoofroom?: number;  // Default: 0
  mode?: string;
  hotelemails?: string;
  othrsourceflag?: number;  // Default: 0
  othrsourcedata?: string;
  payterm?: string;  // Default: text("'3'"
  removetreeboint?: number;  // Default: 0
}

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
