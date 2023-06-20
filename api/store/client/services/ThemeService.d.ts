import type { Theme } from '../models/Theme';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    getActiveTheme({ storeId, }: {
        storeId: number;
    }): CancelablePromise<Theme>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Theme>;
}
