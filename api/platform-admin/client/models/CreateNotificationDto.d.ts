import type { NotificationType } from './NotificationType';
export type CreateNotificationDto = {
    title: string;
    description?: string;
    type: NotificationType;
};
