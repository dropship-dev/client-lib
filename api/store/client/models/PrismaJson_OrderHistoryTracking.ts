/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryTrackingType } from './HistoryTrackingType';
export type PrismaJson_OrderHistoryTracking = Array<{
  createAt: string;
  detail: {
    quantity?: number;
    productVariant?: string;
    productName?: string;
    file?: {
      name: string;
      url: string;
    };
    value?: string;
  };
  type: HistoryTrackingType;
}>;
