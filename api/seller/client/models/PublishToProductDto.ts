/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DesignVariant } from './DesignVariant';
import type { FileTemplate } from './FileTemplate';
import type { PhotoDesign } from './PhotoDesign';
import type { VariantOptionsPayLoad } from './VariantOptionsPayLoad';

export type PublishToProductDto = {
  templateId: number;
  storeId: string;
  name: string;
  description?: string;
  sizeGuide: string;
  supplierContract?: string;
  sku?: string;
  variantOption: Array<VariantOptionsPayLoad>;
  variants: Array<DesignVariant>;
  files: Array<FileTemplate>;
  photos: Array<{
    type: PhotoDesign;
    order: number;
    isSelected: boolean;
    color: string;
    photo: string;
  }>;
  isDraft?: boolean;
};

