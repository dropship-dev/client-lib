import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
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
    }): CancelablePromise<({
        ThemePage: Array<{
            themeId: number;
            themeLibraryId: number;
            content: string;
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
        setting: PrismaJson_ThemeSetting;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
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
        setting: PrismaJson_ThemeSetting;
        name: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    } & {
        ThemePage: {
            themeId: number;
            themeLibraryId: number;
            content: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        };
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
    }) | null>;
}
