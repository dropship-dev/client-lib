import type { _36_Enums_ThemePageType } from '../models/_36_Enums_ThemePageType';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
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
        data: Array<{
            nodes: PrismaJson_ThemeNodes;
            style: PrismaJson_ThemeStyle;
            image: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
            setting: PrismaJson_ThemeSetting;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getThemeLibrary({ id, }: {
        id: number;
    }): CancelablePromise<({
        ThemePage: Array<{
            parentThemePageId: number;
            themeId: number;
            themeLibraryId: number;
            content: string;
            type: _36_Enums_ThemePageType;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        }>;
    } & {
        nodes: PrismaJson_ThemeNodes;
        style: PrismaJson_ThemeStyle;
        image: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
        setting: PrismaJson_ThemeSetting;
    })>;
}
