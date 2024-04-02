/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { typeFulfillmentPrice } from './typeFulfillmentPrice';
/**
 * key is "1", "2", etc
 * stand for set 1, set 2, etc
 */
export type PrismaJson_CostInfo = Record<string, {
  fulfillmentPrice: {
    value: number;
    label: typeFulfillmentPrice;
  };
}>;
