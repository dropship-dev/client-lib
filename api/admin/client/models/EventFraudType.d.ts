import type { OrderInformationFraudType } from './OrderInformationFraudType';
export type EventFraudType = {
    event: string;
    idempotencyKey: string;
    items: Array<OrderInformationFraudType>;
    groupId: string;
    createdAt: string;
};
