import type { ThemeTemplate } from '../models/ThemeTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ThemeTemplateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
}
