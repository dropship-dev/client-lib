/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileCreateTemplate } from './FileCreateTemplate';
import type { PrintAreaItem } from './PrintAreaItem';
import type { TemplateVariant } from './TemplateVariant';
import type { VariantOptionsPayLoad } from './VariantOptionsPayLoad';

export type CreateTemplateDto = {
  name: string;
  productTypeId: number;
  categoryId: number;
  techniqueId: number;
  description?: string;
  supplierContact?: string;
  keyFeature?: string;
  sizeGuide?: string;
  sku: string;
  isStock: boolean;
  isActive: boolean;
  printArea: Array<PrintAreaItem>;
  variantOption: Array<VariantOptionsPayLoad>;
  variants: Array<TemplateVariant>;
  files: Array<FileCreateTemplate>;
};
