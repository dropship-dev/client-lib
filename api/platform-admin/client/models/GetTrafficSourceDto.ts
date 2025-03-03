/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UTMSourceSchema } from './UTMSourceSchema';
export type GetTrafficSourceDto = {
  storeId: string;
  source: UTMSourceSchema;
  startDate?: string;
  endDate?: string;
  cursor?: string;
  limit?: number;
};

