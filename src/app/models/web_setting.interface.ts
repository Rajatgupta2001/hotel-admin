/**
 * WebSetting Model
 * Database table: websetting
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebSetting {
  id?: number;  // Primary key - auto-generated
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
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
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