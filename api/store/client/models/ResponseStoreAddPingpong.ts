/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
export type ResponseStoreAddPingpong = {
  preCursor: boolean;
  nextCursor: string | null;
  data: Array<{
    status: _36_Enums_StoreStatus;
    avatar: string | null;
    name: string;
    id: string;
    isAdded?: boolean;
  }>;
};

