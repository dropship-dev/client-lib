import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyRole } from '../models/_36_Enums_FulfillmentAgencyRole';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ChangeUserPasswordDto } from '../models/ChangeUserPasswordDto';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { ResponseGetUser } from '../models/ResponseGetUser';
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ResponseGetUser Ok
     * @throws ApiError
     */
    getUser(): CancelablePromise<ResponseGetUser>;
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
                taxFeatureEnabled: boolean;
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
            role: _36_Enums_FulfillmentAgencyRole;
            userId: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
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
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteUser(): CancelablePromise<{
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
    changeUserPassword({ requestBody, }: {
        requestBody: ChangeUserPasswordDto;
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
    getUserById({ id, }: {
        id: string;
    }): CancelablePromise<({
        FulfillmentUser: Array<({
            FulfillmentAgency: {
                timezone: PrismaJson_Timezone;
                taxFeatureEnabled: boolean;
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
            role: _36_Enums_FulfillmentAgencyRole;
            userId: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
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
                taxFeatureEnabled: boolean;
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
            role: _36_Enums_FulfillmentAgencyRole;
            userId: string;
            updatedAt: string;
            createdAt: string;
            fulfillmentAgencyId: number;
            id: number;
        })>;
    } & {
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
    })>;
}
