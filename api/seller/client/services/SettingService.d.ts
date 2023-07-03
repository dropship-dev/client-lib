import type { Setting } from '../models/Setting';
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
}
