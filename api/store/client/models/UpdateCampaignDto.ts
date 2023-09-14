/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateDiscountDto } from './UpdateDiscountDto';

export type UpdateCampaignDto = {
  id?: string;
  label?: string;
  startDate?: string;
  duaration?: string | null;
  status?: boolean;
  discountDto?: Array<UpdateDiscountDto>;
};

