import type { CreateThemeTemplateDto } from '../models/CreateThemeTemplateDto';
import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { UpdateThemeTemplateDto } from '../models/UpdateThemeTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    createThemeTemplate({ requestBody, }: {
        requestBody: CreateThemeTemplateDto;
    }): CancelablePromise<ThemeTemplate>;
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    getAllThemeTemplate(): CancelablePromise<Array<ThemeTemplate>>;
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    getThemeTemplate({ id, }: {
        id: number;
    }): CancelablePromise<ThemeTemplate>;
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    updateThemeTemplate({ id, requestBody, }: {
        id: number;
        requestBody: UpdateThemeTemplateDto;
    }): CancelablePromise<ThemeTemplate>;
    /**
     * @returns ThemeTemplate Ok
     * @throws ApiError
     */
    deleteThemeTemplate({ id, }: {
        id: number;
    }): CancelablePromise<ThemeTemplate>;
}
