import type { _36_Enums_RequestSourcingStatus } from './_36_Enums_RequestSourcingStatus';
export type SyncStatusRequestProductDto = {
    requestProductIds: Array<number>;
    status: _36_Enums_RequestSourcingStatus;
    platformProductId?: number;
};
