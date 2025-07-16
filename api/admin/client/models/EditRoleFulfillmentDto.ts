/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentPermissions } from './FulfillmentPermissions';
export type EditRoleFulfillmentDto = {
  name?: string;
  permissions?: Array<FulfillmentPermissions>;
  assignedUsersId: Array<string>;
  fulfillmentAgencyId: number;
};

