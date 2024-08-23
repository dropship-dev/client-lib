import type { CaptureOrderDto } from '../models/CaptureOrderDto';
import type { CreateOrderDto } from '../models/CreateOrderDto';
import type { CrossSellTriggerType } from '../models/CrossSellTriggerType';
import type { CrossSellType } from '../models/CrossSellType';
import type { DiscountCrossSell } from '../models/DiscountCrossSell';
import type { getCrossSellByProductDto } from '../models/getCrossSellByProductDto';
import type { PaymentType } from '../models/PaymentType';
import type { PlacementCrossSellType } from '../models/PlacementCrossSellType';
import type { Product } from '../models/Product';
import type { ProductVariant } from '../models/ProductVariant';
import type { UpdateOrderDto } from '../models/UpdateOrderDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class OrderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        clientSecret: string;
        orderId: string;
        id: string;
        timeExpired: number;
        token: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateStoreOrder({ storeId, tokenClientInfo, requestBody, }: {
        storeId: string;
        tokenClientInfo: string;
        requestBody: UpdateOrderDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    previewStoreOrder({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateOrderDto;
    }): CancelablePromise<{
        freeShipInfo: {
            value?: number;
            status?: boolean;
        };
        total: number;
        discountInfo: {
            value?: number;
            label?: string;
        };
        subTotal: number;
        shippingFee: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    suggestionCrossSell({ storeId, requestBody, }: {
        storeId: string;
        requestBody: Array<getCrossSellByProductDto>;
    }): CancelablePromise<Array<{
        suggestionProduct: Array<(Product & {
            ProductVariant: Array<ProductVariant>;
        })>;
        Product: Array<(Product & {
            ProductVariant: Array<ProductVariant>;
        })>;
        rootProductId: number;
        updatedAt: string;
        createdAt: string;
        endDate: string;
        startDate: string;
        storeId: string;
        triggerBy: CrossSellTriggerType;
        discount: DiscountCrossSell;
        placement: PlacementCrossSellType;
        status: boolean;
        type: CrossSellType;
        name: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    captureStoreOrder({ storeId, orderId, paymentType, requestBody, bmClientInfo, }: {
        storeId: string;
        orderId: string;
        paymentType: PaymentType;
        requestBody: CaptureOrderDto;
        bmClientInfo?: string;
    }): CancelablePromise<{
        status: string;
    }>;
}
