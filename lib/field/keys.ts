/** Keys for Field proof diagrams. Acronyms only - spelled cells stay on the figure. */

export type FieldKeyItem = {
  code: string;
  name: string;
};

/** Beehive left column. Diagram reads O2C, not O2S. */
export const BPF_KEY: FieldKeyItem[] = [
  { code: "P2P", name: "Procure to Pay" },
  { code: "O2C", name: "Order to Cash" },
  { code: "P2M", name: "Plan to Manufacture" },
  { code: "S2S", name: "Systems that Support" },
  { code: "D2R", name: "Data to Report" },
  { code: "MDM", name: "Master Data Management" },
];

/** Acronyms on the Beehive hexes. */
export const BEEHIVE_SYSTEM_KEY: FieldKeyItem[] = [
  { code: "PLM", name: "Product Lifecycle Management" },
  { code: "MES", name: "Manufacturing Execution Systems" },
  { code: "EAM", name: "Enterprise Asset Management" },
  { code: "MDM", name: "Master Data Management" },
  { code: "CDM", name: "Common Data Model" },
  { code: "WMS", name: "Warehouse Management System" },
  { code: "HRIS", name: "Human Resource Information System" },
  { code: "ERP", name: "Enterprise Resource Planning" },
  { code: "IT", name: "Information Technology" },
];

/** Applied Agentics path. Spoken method, not a product SKU. */
export const AGENTICS_METHOD: FieldKeyItem[] = [
  { code: "01", name: "Train" },
  { code: "02", name: "Deploy" },
  { code: "03", name: "Monitor" },
  { code: "04", name: "Govern" },
  { code: "05", name: "Adopt" },
];

/** Acronyms on the Systemverse ring and data core, clockwise from PLM. */
export const SYSTEMVERSE_KEY: FieldKeyItem[] = [
  { code: "PLM", name: "Product Lifecycle Management" },
  { code: "MES", name: "Manufacturing Execution Systems" },
  { code: "QMS", name: "Quality Management Systems" },
  { code: "LIMS", name: "Laboratory Information Management Systems" },
  { code: "WMS", name: "Warehouse Management System" },
  { code: "TMS", name: "Transportation Management Systems" },
  { code: "EAM", name: "Enterprise Asset Management" },
  { code: "ERP", name: "Enterprise Resource Planning" },
  { code: "HRIS", name: "Human Resource Information System" },
  { code: "FP&A", name: "Financial Planning and Analysis" },
  { code: "IBP", name: "Integrated Business Planning" },
  { code: "S&OP", name: "Sales and Operations Planning" },
  { code: "CRM", name: "Customer Relationship Management" },
  { code: "CDM", name: "Common Data Model" },
  { code: "DW", name: "Data Warehouse" },
];
