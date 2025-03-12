import type { _36_Enums_StoreEmailLogStatus } from '../models/_36_Enums_StoreEmailLogStatus';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { CreateMarketingAccount } from '../models/CreateMarketingAccount';
import type { GetListStoreMarketingDto } from '../models/GetListStoreMarketingDto';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { SendEmailToListStoreDto } from '../models/SendEmailToListStoreDto';
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
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        isActive: boolean;
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListStoreMarketing({ requestBody, }: {
        requestBody: GetListStoreMarketingDto;
    }): CancelablePromise<{
        preCursor: boolean;
        nextCursor: string;
        data: Array<{
            status: _36_Enums_StoreEmailLogStatus;
            name: string;
            id: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreEmailMarketingLog({ userId, }: {
        userId: string;
    }): CancelablePromise<Array<{
        emailId: string;
        EmailMarketingTemplate: {
            name: string;
        };
        status: _36_Enums_StoreEmailLogStatus;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    sendEmailToListStore({ requestBody, }: {
        requestBody: SendEmailToListStoreDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getEmailMarketingTemplate(): CancelablePromise<Array<{
        data: string;
        name: string;
        id: number;
    }>>;
}
