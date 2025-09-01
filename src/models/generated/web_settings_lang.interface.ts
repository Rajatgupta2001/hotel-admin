/**
 * WebSettingsLang Model Interfaces
 * Database table: webSettingsLang
 * Generated from Python SQLAlchemy model
 */

// Main interface - represents the complete entity
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
  servcdate?: Date;  // Service date
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

// Create interface - for new entity creation
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

// Update interface - for entity updates (all fields optional)
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
