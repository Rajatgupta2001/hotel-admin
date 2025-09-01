/**
 * WebSetting Model Interfaces
 * Database table: webSetting
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
export interface IWebSetting {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;  // Default: 0
  ccins?: string;
  bookbycq?: number;  // Default: 0
  bookbycqbt?: number;  // Default: 0
  cqins?: string;
  btins?: string;
  bookbyfax?: number;  // Default: 0
  fxins?: string;
  minnonight?: number;  // Default: text("'1'"
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  trpredirecturl?: string;
  webemails?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date
  ccrsvstatus?: string;
  ccreleasetime?: number;
  ccreleasetype?: string;
  cqrsvstatus?: string;
  cqreleasetime?: number;
  cqreleasetype?: string;
  fxrsvstatus?: string;
  fxreleasetime?: number;
  fxreleasetype?: string;
  maxbookingallowed?: number;
  maxsearchperson?: number;  // Default: 0
  addonpopup?: number;  // Default: text("'1'"
  preferencenote?: string;
  webscihealthack?: string;
  webscitcack?: string;
  websciacr?: string;
  websciacrack?: string;
  webscitc?: string;
  webenbhealthdec?: string;
  enbsignpad?: string;
  enbidproofupload?: string;
  pdpatc?: string;
  pdpaenbsignpad?: number;  // Default: text("'1'"
}

// Create interface - for new entity creation
export interface ICreateWebSetting {
  hotelid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;
  ccins?: string;
  bookbycq?: number;
  bookbycqbt?: number;
  cqins?: string;
  btins?: string;
  bookbyfax?: number;
  fxins?: string;
  minnonight?: number;
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  trpredirecturl?: string;
  webemails?: string;
  createdby?: number;
  modifiedby?: number;
  ccrsvstatus?: string;
  ccreleasetime?: number;
  ccreleasetype?: string;
  cqrsvstatus?: string;
  cqreleasetime?: number;
  cqreleasetype?: string;
  fxrsvstatus?: string;
  fxreleasetime?: number;
  fxreleasetype?: string;
  maxbookingallowed?: number;
  maxsearchperson?: number;
  addonpopup?: number;
  preferencenote?: string;
  webscihealthack?: string;
  webscitcack?: string;
  websciacr?: string;
  websciacrack?: string;
  webscitc?: string;
  webenbhealthdec?: string;
  enbsignpad?: string;
  enbidproofupload?: string;
  pdpatc?: string;
  pdpaenbsignpad?: number;
}

// Update interface - for entity updates (all fields optional)
export interface IUpdateWebSetting {
  hotelid?: number;
  webheader?: string;
  webfooter?: string;
  bookbycc?: number;
  ccins?: string;
  bookbycq?: number;
  bookbycqbt?: number;
  cqins?: string;
  btins?: string;
  bookbyfax?: number;
  fxins?: string;
  minnonight?: number;
  maxnonight?: number;
  webtc?: string;
  enbserver?: string;
  redirecturl?: string;
  trpredirecturl?: string;
  webemails?: string;
  createdby?: number;
  modifiedby?: number;
  ccrsvstatus?: string;
  ccreleasetime?: number;
  ccreleasetype?: string;
  cqrsvstatus?: string;
  cqreleasetime?: number;
  cqreleasetype?: string;
  fxrsvstatus?: string;
  fxreleasetime?: number;
  fxreleasetype?: string;
  maxbookingallowed?: number;
  maxsearchperson?: number;
  addonpopup?: number;
  preferencenote?: string;
  webscihealthack?: string;
  webscitcack?: string;
  websciacr?: string;
  websciacrack?: string;
  webscitc?: string;
  webenbhealthdec?: string;
  enbsignpad?: string;
  enbidproofupload?: string;
  pdpatc?: string;
  pdpaenbsignpad?: number;
}
