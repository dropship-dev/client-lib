import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { Review } from '../models/Review';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReviewService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    createReview({ requestBody, }: {
        requestBody: CreateReviewDto;
    }): CancelablePromise<Review>;
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    getReview({ id, }: {
        id: number;
    }): CancelablePromise<Review>;
}
