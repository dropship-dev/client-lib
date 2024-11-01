import type { SendEmailToListStoreStatus } from './SendEmailToListStoreStatus';
export type SendEmailToListStoreDto = {
    userIds?: Array<string>;
    templateId: number;
    type?: SendEmailToListStoreStatus;
};
