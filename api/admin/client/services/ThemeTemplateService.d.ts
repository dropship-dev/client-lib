import type { CreateThemeTemplateDto } from '../models/CreateThemeTemplateDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
import type { UpdateThemeTemplateDto } from '../models/UpdateThemeTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createThemeTemplate({ requestBody, }: {
        requestBody: CreateThemeTemplateDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllThemeTemplate(): CancelablePromise<Array<GetResult_any_any_any_>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getThemeTemplate({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateThemeTemplate({ id, requestBody, }: {
        id: number;
        requestBody: UpdateThemeTemplateDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteThemeTemplate({ id, }: {
        id: number;
    }): CancelablePromise<GetResult_any_any_any_>;
}
