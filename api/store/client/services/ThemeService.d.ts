import type { Theme } from '../models/Theme';
import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getActiveTheme({ storeId, }: {
        storeId: string;
    }): CancelablePromise<(Theme & {
        template: ThemeTemplate;
    })>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<Theme>;
}
