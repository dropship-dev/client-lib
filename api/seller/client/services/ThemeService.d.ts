import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { Theme } from '../models/Theme';
import type { UpdateThemeDto } from '../models/UpdateThemeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    createTheme({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateThemeDto;
    }): CancelablePromise<Theme>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTheme({ storeId, }: {
        storeId: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<Theme>;
    }>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    getActiveTheme({ storeId, }: {
        storeId: number;
    }): CancelablePromise<Theme>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    changeActiveTheme({ storeId, requestBody, }: {
        storeId: number;
        requestBody: ChangeActiveTheme;
    }): CancelablePromise<string>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Theme>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    updateTheme({ storeId, id, requestBody, }: {
        storeId: number;
        id: number;
        requestBody: UpdateThemeDto;
    }): CancelablePromise<Theme>;
    /**
     * @returns Theme Ok
     * @throws ApiError
     */
    deleteTheme({ storeId, id, }: {
        storeId: number;
        id: number;
    }): CancelablePromise<Theme>;
}
