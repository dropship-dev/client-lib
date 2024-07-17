import type { NotificationType } from './NotificationType';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
/**
 * Model Notification
 */
export type Notification = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number | null;
    storeId: string | null;
    data: Prisma_JsonValue | null;
    type: NotificationType;
    description: string | null;
    title: string;
    id: number;
};
