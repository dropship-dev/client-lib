/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateDiscountDto } from './UpdateDiscountDto';
export type UpdateCampaignDto = {
  id?: string;
  label?: string;
  startDate?: string;
  endDate?: string | null;
  status?: boolean;
  discountDto?: Array<UpdateDiscountDto>;
};

