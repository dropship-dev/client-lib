import type { Setting } from '../models/Setting';
import type { UpdateSettingDto } from '../models/UpdateSettingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SettingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Setting Ok
     * @throws ApiError
     */
    getSetting(): CancelablePromise<Setting>;
    /**
     * @returns Setting Ok
     * @throws ApiError
     */
    updateSetting({ requestBody, }: {
        requestBody: UpdateSettingDto;
    }): CancelablePromise<Setting>;
}
