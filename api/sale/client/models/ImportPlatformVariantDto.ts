/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PhotoDto } from './PhotoDto';
export type ImportPlatformVariantDto = {
  id: number;
  sku: string;
  name: string;
  price: number;
  image: PhotoDto;
  variantOptionIds: Array<number>;
  variantOptions: Array<{
    option: string;
    name: string;
  }>;
};

