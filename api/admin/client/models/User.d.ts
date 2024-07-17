import type { PrismaJson_FirebaseDeviceToken } from './PrismaJson_FirebaseDeviceToken';
import type { UserRole } from './UserRole';
/**
 * Model User
 */
export type User = {
    subscriptionId: string | null;
    updatedAt: string;
    createdAt: string;
    /**
     * [FirebaseDeviceToken]
     */
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken | null;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: UserRole;
    avatar: string | null;
    phone: string | null;
    country: string | null;
    name: string;
    email: string;
    id: string;
};
