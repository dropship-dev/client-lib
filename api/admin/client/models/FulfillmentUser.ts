/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentAgencyRole } from './FulfillmentAgencyRole';
/**
 * Model FulfillmentUser
 */
export type FulfillmentUser = {
  updatedAt: string;
  createdAt: string;
  fulfillmentAgencyId: number;
  isOwner: boolean | null;
  role: FulfillmentAgencyRole;
  userId: string;
  id: number;
};

