/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CostCalculationMethod } from './_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from './_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from './_36_Enums_FulfillmentAgencyType';
import type { PrismaJson_Timezone } from './PrismaJson_Timezone';
export type DefaultSelection_Prisma__36_FulfillmentAgencyPayload_ = {
  timezone: PrismaJson_Timezone;
  platformFee: number;
  type: _36_Enums_FulfillmentAgencyType;
  costCalculationMethod: _36_Enums_CostCalculationMethod;
  executionTime: string;
  status: _36_Enums_FulfillmentAgencyStatus;
  phone: string;
  email: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  id: number;
};

