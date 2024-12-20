import type { CreateTechniqueDto } from '../models/CreateTechniqueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTechniqueService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTechnique({ requestBody, }: {
        requestBody: CreateTechniqueDto;
    }): CancelablePromise<{
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListTechnique(): CancelablePromise<Array<{
        name: string;
        id: number;
    }>>;
}
