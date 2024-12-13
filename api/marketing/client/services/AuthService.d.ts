import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_FulfillmentAgencyStatus } from '../models/_36_Enums_FulfillmentAgencyStatus';
import type { _36_Enums_FulfillmentAgencyType } from '../models/_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { LoginDto } from '../models/LoginDto';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AuthService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    login({ requestBody, }: {
        requestBody: LoginDto;
    }): CancelablePromise<{
        maxOwnedStores: number;
        role: _36_Enums_UserRole;
        FulfillmentUser: Array<{
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
        }>;
        email: string;
        name: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    signInPusher({ requestBody, }: {
        requestBody: {
            authorization: string;
            channel_name: string;
            socket_id: string;
        };
    }): CancelablePromise<any>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    signInSocket({ requestBody, }: {
        requestBody: {
            authorization: string;
            appId: string;
            appName: string;
        };
    }): CancelablePromise<any>;
}
