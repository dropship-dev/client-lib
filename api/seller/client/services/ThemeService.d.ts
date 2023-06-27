import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateThemeDto } from '../models/UpdateThemeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTheme({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateThemeDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTheme({ storeId, }: {
        storeId: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: (string | number);
        total: number;
        data: Array<GetResult_any_any_any_>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getActiveTheme({ storeId, }: {
        storeId: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    changeActiveTheme({ storeId, requestBody, }: {
        storeId: number;
        requestBody: ChangeActiveTheme;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateTheme({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: UpdateThemeDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteTheme({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
