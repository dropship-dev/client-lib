import type { _36_Enums_LogoSize } from '../models/_36_Enums_LogoSize';
import type { ChangeActiveTheme } from '../models/ChangeActiveTheme';
import type { CreateThemeDto } from '../models/CreateThemeDto';
import type { PrismaJson_ThemeNodes } from '../models/PrismaJson_ThemeNodes';
import type { PrismaJson_ThemeSetting } from '../models/PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from '../models/PrismaJson_ThemeStyle';
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
        storeId: string;
        requestBody: CreateThemeDto;
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
