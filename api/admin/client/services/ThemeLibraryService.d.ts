import type { CreateThemeLibraryDto } from '../models/CreateThemeLibraryDto';
import type { ThemeLibrary } from '../models/ThemeLibrary';
import type { ThemePage } from '../models/ThemePage';
import type { UpdateThemeLibraryDto } from '../models/UpdateThemeLibraryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeLibraryService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ThemeLibrary Ok
     * @throws ApiError
     */
    createThemeLibrary({ requestBody, }: {
        requestBody: CreateThemeLibraryDto;
    }): CancelablePromise<ThemeLibrary>;
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
    /**
     * @returns ThemeLibrary Ok
     * @throws ApiError
     */
    updateThemeLibrary({ id, requestBody, }: {
        id: number;
        requestBody: UpdateThemeLibraryDto;
    }): CancelablePromise<ThemeLibrary>;
    /**
     * @returns ThemeLibrary Ok
     * @throws ApiError
     */
    deleteThemeLibrary({ id, }: {
        id: number;
    }): CancelablePromise<ThemeLibrary>;
}
