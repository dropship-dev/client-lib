import type { ThemeLibrary } from '../models/ThemeLibrary';
import type { ThemePage } from '../models/ThemePage';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeLibraryService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllThemeLibrary({ pageSize, nextPageIndex, }: {
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<ThemeLibrary>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getThemeLibrary({ id, }: {
        id: number;
    }): CancelablePromise<(ThemeLibrary & {
        ThemePage: Array<ThemePage>;
    })>;
}
