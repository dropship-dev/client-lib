/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileUpdateDesign } from './FileUpdateDesign';
import type { UpdateDesignVariant } from './UpdateDesignVariant';
import type { VariantOptionsPayLoad } from './VariantOptionsPayLoad';

export type UpdateDesignDto = {
  name: string;
  description?: string;
  sizeGuide?: string;
  supplierContract?: string;
  sku?: string;
  variantOption: Array<VariantOptionsPayLoad>;
  files: Array<FileUpdateDesign>;
  variants: Array<UpdateDesignVariant>;
  photos: Array<{
    type: 'THUMBNAIL_IMAGE' | 'MOCKUP_IMAGE';
    order: number;
    isSelected: boolean;
    color: string;
    photo: string;
  }>;
};

