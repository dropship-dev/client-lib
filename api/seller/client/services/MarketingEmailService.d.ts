import type { BatchPayload } from '../models/BatchPayload';
import type { CreateAutomationEmailMarketingDto } from '../models/CreateAutomationEmailMarketingDto';
import type { CreateComboItems } from '../models/CreateComboItems';
import type { CreateOrderItems } from '../models/CreateOrderItems';
import type { CreateTemplateDto } from '../models/CreateTemplateDto';
import type { EmailTrackingAction } from '../models/EmailTrackingAction';
import type { OrderTrackingEmailStatus } from '../models/OrderTrackingEmailStatus';
import type { OrderTrackingRecoveredStatus } from '../models/OrderTrackingRecoveredStatus';
import type { UpdateActiveStatusAutomationEmailMarketingDto } from '../models/UpdateActiveStatusAutomationEmailMarketingDto';
import type { UpdateAutomationEmailMarketingDto } from '../models/UpdateAutomationEmailMarketingDto';
import type { UpdateTemplateDto } from '../models/UpdateTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketingEmailService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatisticsStoreAbandonmentCheckout({ storeId, startTime, endTime, }: {
        storeId: string;
        startTime: string;
        endTime: string;
    }): CancelablePromise<{
        clickPercent: number;
        totalClick: number;
        totalOpenPercent: number;
        totalOpen: number;
        revenue: number;
        conversionRate: number;
        orderRecoveredPercent: number;
        orderRecovered: number;
        emailSent: number;
    }>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    createAutomationEmailMarketing({ requestBody, }: {
        requestBody: CreateAutomationEmailMarketingDto;
    }): CancelablePromise<BatchPayload>;
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
                specificDays: string;
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
    listAbandonmentOrders({ storeId, pageSize, nextPageIndex, emailStatus, recoveryStatus, id, startDate, endDate, }: {
        storeId: string;
        pageSize: number;
        nextPageIndex?: number;
        emailStatus?: OrderTrackingEmailStatus;
        recoveryStatus?: OrderTrackingRecoveredStatus;
        id?: number;
        startDate?: string;
        endDate?: string;
    }): CancelablePromise<{
        nextPageIndex: number;
        prePageIndex: number;
        data: Array<{
            emailStatus: OrderTrackingEmailStatus;
            recoveredStatus: OrderTrackingRecoveredStatus;
            total: number;
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
        emailStatus: OrderTrackingEmailStatus;
        recoveredStatus: OrderTrackingRecoveredStatus;
        phoneNumber: string;
        comboItems: CreateComboItems;
        orderItems: CreateOrderItems;
        subTotal: number;
        total: number;
        shippingFee: number;
        email: string;
        EmailTrackings: Array<{
            action: EmailTrackingAction;
            AbandonmentReminder: {
                AbandonmentSettings: {
                    subjectLine: string;
                };
            };
            createdAt: string;
        }>;
        createdAt: string;
        id: number;
        checkoutDetail: Array<{
            quantity: number;
            price: number;
            photo: string;
        }>;
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
}
