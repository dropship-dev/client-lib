import type { CreateTechniqueDto } from '../models/CreateTechniqueDto';
import type { PodTechnique } from '../models/PodTechnique';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTechniqueService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns PodTechnique Ok
     * @throws ApiError
     */
    createTechnique({ requestBody, }: {
        requestBody: CreateTechniqueDto;
    }): CancelablePromise<PodTechnique>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListTechnique(): CancelablePromise<Array<{
        name: string;
        id: number;
    }>>;
}
