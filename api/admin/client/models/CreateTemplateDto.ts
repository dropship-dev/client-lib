/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileCreateTemplate } from './FileCreateTemplate';
import type { PodTemplateVariant } from './PodTemplateVariant';
import type { PrintAreaItem } from './PrintAreaItem';
import type { VariantOptionsPayLoad } from './VariantOptionsPayLoad';

export type CreateTemplateDto = {
  name: string;
  podProductTypeId: number;
  podCategoryId: number;
  podTechniqueId: number;
  description?: string;
  supplierContact?: string;
  keyFeature?: string;
  sizeGuide?: string;
  sku: string;
  isStock: boolean;
  isActive: boolean;
  podPrintArea: Array<PrintAreaItem>;
  variantOption: Array<VariantOptionsPayLoad>;
  variants: Array<PodTemplateVariant>;
  files: Array<FileCreateTemplate>;
};

