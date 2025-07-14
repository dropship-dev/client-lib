/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GetCustomerTrackingDto = {
  storeId: string;
  startDate?: string;
  endDate?: string;
  filterBy?: GetCustomerTrackingDto.filterBy;
};
export namespace GetCustomerTrackingDto {
  export enum filterBy {
    ORDER = 'ORDER',
    REVENUE = 'REVENUE',
  }
}

