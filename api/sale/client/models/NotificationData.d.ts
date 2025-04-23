import type { Notification } from './Notification';
export type NotificationData = (Notification & {
    isRead: boolean;
});
