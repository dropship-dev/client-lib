import type { PrismaJson_FirebaseDeviceToken } from './PrismaJson_FirebaseDeviceToken';
import type { UserRole } from './UserRole';
/**
 * Model User
 */
export type User = {
    updatedAt: string;
    createdAt: string;
    subscriptionId: string | null;
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
