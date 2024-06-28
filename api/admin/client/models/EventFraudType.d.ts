import type { ActionOrderFraud } from './ActionOrderFraud';
import type { EventOrderFraud } from './EventOrderFraud';
import type { OrderInformationFraudType } from './OrderInformationFraudType';
export type EventFraudType = {
    event: EventOrderFraud;
    idempotencyKey: string;
    items: Array<OrderInformationFraudType>;
    groupId: string;
    action?: ActionOrderFraud;
    createdAt: string;
};
