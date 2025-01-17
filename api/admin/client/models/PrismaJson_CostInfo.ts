/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeFulfillmentPrice } from './TypeFulfillmentPrice';
/**
 * key is "1", "2", etc
 * stand for set 1, set 2, etc
 */
export type PrismaJson_CostInfo = Record<string, {
  fulfillmentPrice: {
    value: number;
    label: TypeFulfillmentPrice;
  };
}>;
