import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyRole } from '../models/_36_Enums_FulfillmentAgencyRole';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ChangeUserPasswordDto } from '../models/ChangeUserPasswordDto';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { FulfillmentUser } from '../models/FulfillmentUser';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { User } from '../models/User';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getUser(): CancelablePromise<(User & {
        FulfillmentUser: Array<(FulfillmentUser & {
            FulfillmentAgency: (FulfillmentAgency & {
                Wallet: Array<Wallet>;
            });
        })>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateUser({ requestBody, }: {
        requestBody: UpdateUserDto;
    }): CancelablePromise<({
        FulfillmentUser: Array<({
            FulfillmentAgency: {
                timezone: PrismaJson_Timezone;
                platformFee: number;
                type: _36_Enums_FulfillmentAgencyType;
                costCalculationMethod: _36_Enums_CostCalculationMethod;
                executionTime: string;
                status: _36_Enums_FulfillmentAgencyStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
        } & {
            isOwner: boolean;
            userId: string;
            role: _36_Enums_FulfillmentAgencyRole;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
        country: string;
        avatar: string;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteUser(): CancelablePromise<{
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
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
    changeUserPassword({ requestBody, }: {
        requestBody: ChangeUserPasswordDto;
    }): CancelablePromise<{
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
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
    getUserById({ id, }: {
        id: string;
    }): CancelablePromise<({
        FulfillmentUser: Array<({
            FulfillmentAgency: {
                timezone: PrismaJson_Timezone;
                platformFee: number;
                type: _36_Enums_FulfillmentAgencyType;
                costCalculationMethod: _36_Enums_CostCalculationMethod;
                executionTime: string;
                status: _36_Enums_FulfillmentAgencyStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
        } & {
            isOwner: boolean;
            userId: string;
            role: _36_Enums_FulfillmentAgencyRole;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
        country: string;
        avatar: string;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: string;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateUserById({ id, requestBody, }: {
        id: string;
        requestBody: UpdateUserDto;
    }): CancelablePromise<({
        FulfillmentUser: Array<({
            FulfillmentAgency: {
                timezone: PrismaJson_Timezone;
                platformFee: number;
                type: _36_Enums_FulfillmentAgencyType;
                costCalculationMethod: _36_Enums_CostCalculationMethod;
                executionTime: string;
                status: _36_Enums_FulfillmentAgencyStatus;
                phone: string;
                email: string;
                name: string;
                updatedAt: string;
                createdAt: string;
                id: number;
            };
        } & {
            isOwner: boolean;
            userId: string;
            role: _36_Enums_FulfillmentAgencyRole;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
        subscriptionId: string;
        firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
        firstLogin: boolean;
        maxStaffStores: number;
        maxOwnedStores: number;
        shortId: string;
        role: _36_Enums_UserRole;
        country: string;
        avatar: string;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: string;
    })>;
}
