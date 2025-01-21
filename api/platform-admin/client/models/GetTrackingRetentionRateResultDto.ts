/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Period } from './Period';
import type { Tracking } from './Tracking';
export type GetTrackingRetentionRateResultDto = {
  period: Period;
  totalFirstTime: {
    growth: number | null;
    value: number;
  };
  totalReturning: {
    growth: number | null;
    value: number;
  };
  data: Array<Tracking>;
};

