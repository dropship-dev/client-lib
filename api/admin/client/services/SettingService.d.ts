import type { Setting } from '../models/Setting';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SettingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSetting({ fulfillmentAgencyId, storeId, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
    }): CancelablePromise<(Setting | {
        shippingPolicy: string;
        termsOfService: string;
        refundPolicy: string;
        privacyPolicy: string;
    })>;
    /**
     * @returns Setting Ok
     * @throws ApiError
     */
    updateSetting({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateSettingDto;
    }): CancelablePromise<Setting>;
}
