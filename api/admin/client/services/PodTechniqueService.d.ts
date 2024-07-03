import type { CreateTechniqueDto } from '../models/CreateTechniqueDto';
import type { Technique } from '../models/Technique';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodTechniqueService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Technique Ok
     * @throws ApiError
     */
    createTechnique({ requestBody, }: {
        requestBody: CreateTechniqueDto;
    }): CancelablePromise<Technique>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListTechnique(): CancelablePromise<Array<{
        name: string;
        id: number;
    }>>;
}
