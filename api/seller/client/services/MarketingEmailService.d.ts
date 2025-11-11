import type { _36_Enums_EmailTrackingAction } from '../models/_36_Enums_EmailTrackingAction';
import type { _36_Enums_OrderTrackingEmailStatus } from '../models/_36_Enums_OrderTrackingEmailStatus';
import type { _36_Enums_OrderTrackingRecoveredStatus } from '../models/_36_Enums_OrderTrackingRecoveredStatus';
import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { OrderTrackingEmailStatusDto } from '../models/OrderTrackingEmailStatusDto';
import type { OrderTrackingRecoveredStatusDto } from '../models/OrderTrackingRecoveredStatusDto';
import type { PrismaJson_CreateComboItems } from '../models/PrismaJson_CreateComboItems';
import type { PrismaJson_CreateOrderItems } from '../models/PrismaJson_CreateOrderItems';
import type { UpdateActiveStatusAutomationEmailMarketingDto } from '../models/UpdateActiveStatusAutomationEmailMarketingDto';
import type { UpdateAutomationEmailMarketingDto } from '../models/UpdateAutomationEmailMarketingDto';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketingEmailService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    updateAutomationEmailMarketing({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateAutomationEmailMarketingDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateActiveStatusAutomationEmailMarketing({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateActiveStatusAutomationEmailMarketingDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listAbandonmentSettings({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        items: Array<{
            emailMarketingTemplate: {
                data: string;
                id: number;
            };
            createdAt: string;
            advance: {
                specificTime: string;
                specificDays: Array<string>;
            };
            unit: string;
            timeDelay: string;
            subjectLine: string;
            templateId: number;
            id: number;
        }>;
        senderName: string;
        isActive: boolean;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    emailAssignment({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        email: string;
        replyToEmail: string;
        fromName: string;
        emailUsernameId: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listAbandonmentOrders({ storeId, nextPageIndex, pageSize, emailStatus, recoveryStatus, id, startDate, endDate, }: {
        storeId: string;
        nextPageIndex?: number;
        pageSize?: number;
        emailStatus?: Array<OrderTrackingEmailStatusDto>;
        recoveryStatus?: Array<OrderTrackingRecoveredStatusDto>;
        id?: string;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        nextPageIndex: number;
        prePageIndex: number;
        data: Array<{
            emailStatus: _36_Enums_OrderTrackingEmailStatus;
            recoveredStatus: _36_Enums_OrderTrackingRecoveredStatus;
            total: number;
            expiredAt: string;
            email: string;
            createdAt: string;
            id: number;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailAbandonmentCheckout({ storeId, orderTrackingId, }: {
        storeId: string;
        orderTrackingId: number;
    }): CancelablePromise<{
        emailStatus: _36_Enums_OrderTrackingEmailStatus;
        recoveredStatus: _36_Enums_OrderTrackingRecoveredStatus;
        phoneNumber: string;
        comboItems: PrismaJson_CreateComboItems;
        orderItems: PrismaJson_CreateOrderItems;
        discountShippingFee: number;
        subTotal: number;
        total: number;
        expiredAt: string;
        email: string;
        createdAt: string;
        id: number;
        EmailTrackings: Array<{
            AbandonmentReminder: {
                AbandonmentSettings: {
                    subjectLine: string;
                };
            };
            action: _36_Enums_EmailTrackingAction;
            createdAt: string;
        }>;
        checkoutDetail: Array<{
            comboVariantName?: string;
            productVariantName?: string;
            name: string;
            quantity: number;
            price: number;
            photo: string;
        }>;
        shippingFee: number;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    createTemplate({ requestBody, }: {
        requestBody: CreateTemplateDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateTemplate({ id, requestBody, }: {
        id: number;
        requestBody: UpdateTemplateDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsStoreAbandonmentCheckout({ storeId, startTime, endTime, }: {
        storeId: string;
        startTime?: string;
        endTime?: string;
    }): CancelablePromise<{
        orderCompletedPercent: number;
        orderCompleted: number;
        clickPercent: number;
        totalClick: number;
        openPercent: number;
        totalOpen: number;
        sentPercent: number;
        totalSent: number;
        revenueGrowthPercent: number;
        revenue: number;
        orderConvertedGrowthPercent: number;
        orderConverted: number;
        conversionRateGrowthPercent: number;
        conversionRate: number;
    }>;
}
