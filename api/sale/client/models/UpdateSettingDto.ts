/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateSettingDto = {
  privacyPolicy?: string;
  refundPolicy?: string;
  termsOfService?: string;
  shippingPolicy?: string;
  hold?: {
    payoutIn: number;
    holdIn: number;
    retentionRate: number;
  };
};

