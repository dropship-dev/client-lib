/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
export type ResponseStoreAddPingpong = {
  storeByEmail: Array<{
    isAdded?: boolean;
    avatar: string | null;
    status: _36_Enums_StoreStatus;
    name: string;
    id: string;
  }>;
  stores: Array<{
    isAdded?: boolean;
    avatar: string | null;
    status: _36_Enums_StoreStatus;
    name: string;
    id: string;
  }>;
};

