/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Period } from './Period';
import type { Tracking } from './Tracking';
export type GetCustomerTrackingResultDto = {
  period: Period;
  aggregateFirstTime: {
    growth: number | null;
    value: number;
  };
  aggregateReturning: {
    growth: number | null;
    value: number;
  };
  aggregateTotal: number;
  data: Array<Tracking>;
};

