import type { Theme } from '../models/Theme';
import type { ThemePage } from '../models/ThemePage';
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
        ThemePage: Array<ThemePage>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getActiveThemePage({ storeId, pageName, }: {
        storeId: string;
        pageName: string;
    }): CancelablePromise<(Theme & {
        ThemePage: ThemePage;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<(Theme & {
        ThemePage: Array<ThemePage>;
    })>;
}
