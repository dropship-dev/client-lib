/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTemplateDto = {
  name?: string;
  podProductTypeId?: number;
  podCategoryId?: number;
  podTechniqueId?: number;
  description?: string;
  supplierContact?: string;
  keyFeature?: string;
  sizeGuide?: string;
  isStock?: boolean;
  isActive?: boolean;
  variants?: Array<{
    isActive: boolean;
    faPrice: number;
    supplierCost: number;
    podTemplateVariantId: number;
  }>;
  podPrintArea?: Array<{
    faPrice: number;
    supplierCost: number;
    podPrintAreaId: number;
  }>;
};

