import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createMarketingAccount({ requestBody, }: {
        requestBody: CreateMarketingAccount;
    }): CancelablePromise<{
        emailVerified: boolean;
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
        invitedById: string;
        country: string;
        avatar: string;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: string;
    }>;
}
