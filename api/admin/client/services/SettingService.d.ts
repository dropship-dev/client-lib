import type { BatchPayload } from '../models/BatchPayload';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
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
    getSetting(): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    updateSetting({ requestBody, }: {
        requestBody: UpdateSettingDto;
    }): CancelablePromise<BatchPayload>;
}
