import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { _36_Enums_ThemePageType } from '../models/_36_Enums_ThemePageType';
import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CloneThemePageDto } from '../models/CloneThemePageDto';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
import type { Theme } from '../models/Theme';
import type { ThemePageWithDetails } from '../models/ThemePageWithDetails';
import type { ThemeWithDetails } from '../models/ThemeWithDetails';
import type { UpdateAssignedProductsForThemePageDto } from '../models/UpdateAssignedProductsForThemePageDto';
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
        storeId: string;
        requestBody: CreateThemeDto;
    }): CancelablePromise<Theme>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTheme({ storeId, pageSize, nextPageIndex, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
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
        }>;
    }>;
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
     * @returns string Ok
     * @throws ApiError
     */
    changeActiveTheme({ storeId, requestBody, }: {
        storeId: string;
        requestBody: ChangeActiveTheme;
    }): CancelablePromise<string>;
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
     * @returns any Ok
     * @throws ApiError
     */
    cloneThemePage({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CloneThemePageDto;
    }): CancelablePromise<{
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listActiveThemePages({ storeId, pageType, productId, }: {
        storeId: string;
        pageType: _36_Enums_ThemePageType;
        productId?: number;
    }): CancelablePromise<{
        themePages: Array<{
            name: string;
            id: number;
        }>;
        activeTheme: {
            name: string;
            id: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listProductsForThemePage({ storeId, pageSize, nextPageIndex, name, themePageId, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        name?: string;
        themePageId?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            permalink: string;
            photos: PrismaJson_Photos;
            name: string;
            id: number;
            ThemePagesOnProducts: Array<{
                themePageId: number;
            }>;
        }>;
    }>;
    /**
     * @returns ThemePageWithDetails Ok
     * @throws ApiError
     */
    getThemePage({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<ThemePageWithDetails>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteThemePage({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateAssignedProductsForThemePage({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: UpdateAssignedProductsForThemePageDto;
    }): CancelablePromise<string>;
    /**
     * @returns ThemeWithDetails Ok
     * @throws ApiError
     */
    getTheme({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<ThemeWithDetails>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateTheme({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody: UpdateThemeDto;
    }): CancelablePromise<{
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteTheme({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<{
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
    }>;
}
