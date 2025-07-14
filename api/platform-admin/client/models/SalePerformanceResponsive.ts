/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SalePerformanceResponsive = {
  data: Array<{
    purchased: number;
    GMV: number;
    timeFrame: {
      end: string;
      start: string;
    };
  }>;
  type: SalePerformanceResponsive.type;
};
export namespace SalePerformanceResponsive {
  export enum type {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
    HOUR = 'hour',
  }
}

