import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { CreateFulfillmentAgencyDto } from '../models/CreateFulfillmentAgencyDto';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { UpdateFulfillmentAgencyDto } from '../models/UpdateFulfillmentAgencyDto';
import type { UpdateFulfillmentAgencyStatusDto } from '../models/UpdateFulfillmentAgencyStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FulfillmentAgencyService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createFulfillmentAgency({ requestBody, }: {
        requestBody: CreateFulfillmentAgencyDto;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllFulfillmentAgency({ userId, search, pageSize, nextPageIndex, }: {
        userId?: string;
        search?: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
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
            Wallet: Array<{
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                fulfillmentAgencyId: number;
                balanceUnavailable: PrismaJson_UnavailableBalance;
                payoutAmount: number;
                holdAmount: number;
                balanceDebt: number;
                balanceAvailable: number;
                balanceAmount: number;
                walletName: string;
                id: string;
            }>;
            noProduct: number;
            noStore: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<({
        Wallet: Array<{
            updatedAt: string;
            createdAt: string;
            isDeleted: boolean;
            storeId: string;
            fulfillmentAgencyId: number;
            balanceUnavailable: PrismaJson_UnavailableBalance;
            payoutAmount: number;
            holdAmount: number;
            balanceDebt: number;
            balanceAvailable: number;
            balanceAmount: number;
            walletName: string;
            id: string;
        }>;
    } & {
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
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateFulfillmentAgency({ id, requestBody, }: {
        id: number;
        requestBody: UpdateFulfillmentAgencyDto;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteFulfillmentAgency({ id, }: {
        id: number;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateFulfillmentAgencyStatus({ id, requestBody, }: {
        id: number;
        requestBody: UpdateFulfillmentAgencyStatusDto;
    }): CancelablePromise<{
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
    }>;
}
