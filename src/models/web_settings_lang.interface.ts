/**
 * WebSettingsLang Model
 * Database table: websettingslang
 * Auto-generated from Python SQLAlchemy model
 * 
 * Note: Default values are handled by backend/database.
 * TypeScript interfaces only describe the data structure.
 */
export interface IWebSettingsLang {
  id?: number;  // Primary key - auto-generated
  hotelid?: number;
  languageid?: number;
  refid?: number;
  webheader?: string;
  webfooter?: string;
  ccins?: string;
  cqins?: string;
  btins?: string;
  fxins?: string;
  webtc?: string;
  createdon?: Date;  // Auto-populated timestamp
  createdby?: number;  // User ID reference
  servcdate?: Date;  // Service date - auto-populated
  modifiedon?: Date;  // Auto-populated timestamp
  modifiedby?: number;  // User ID reference
  ccinsfile?: string;
  cqinsfile?: string;
  fxinsfile?: string;
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
}

export interface ICreateWebSettingsLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  webheader?: string;
  webfooter?: string;
  ccins?: string;
  cqins?: string;
  btins?: string;
  fxins?: string;
  webtc?: string;
  createdby?: number;
  modifiedby?: number;
  ccinsfile?: string;
  cqinsfile?: string;
  fxinsfile?: string;
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
}
export interface IUpdateWebSettingsLang {
  hotelid?: number;
  languageid?: number;
  refid?: number;
  webheader?: string;
  webfooter?: string;
  ccins?: string;
  cqins?: string;
  btins?: string;
  fxins?: string;
  webtc?: string;
  createdby?: number;
  modifiedby?: number;
  ccinsfile?: string;
  cqinsfile?: string;
  fxinsfile?: string;
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
}