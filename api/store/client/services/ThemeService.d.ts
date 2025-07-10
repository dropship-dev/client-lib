import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { _36_Enums_ThemePageType } from '../models/_36_Enums_ThemePageType';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { ThemeWithDetails } from '../models/ThemeWithDetails';
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
        themeTemplateId: number;
        isActivated: boolean;
        components: any;
        colors: any;
        font: string;
        heroBanner: string;
        logoSize: _36_Enums_LogoSize;
        logo: string;
        nodes: PrismaJson_ThemeNodes;
        style: PrismaJson_ThemeStyle;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        setting: PrismaJson_ThemeSetting;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getActiveThemePage({ storeId, pageName, }: {
        storeId: string;
        pageName: string;
    }): CancelablePromise<({
        themeTemplateId: number;
        isActivated: boolean;
        components: any;
        colors: any;
        font: string;
        heroBanner: string;
        logoSize: _36_Enums_LogoSize;
        logo: string;
        nodes: PrismaJson_ThemeNodes;
        style: PrismaJson_ThemeStyle;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        setting: PrismaJson_ThemeSetting;
    } & {
        ThemePage: {
            parentThemePageId: number;
            themeId: number;
            themeLibraryId: number;
            content: string;
            type: _36_Enums_ThemePageType;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        };
    })>;
    /**
     * @returns ThemeWithDetails Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<ThemeWithDetails>;
}
