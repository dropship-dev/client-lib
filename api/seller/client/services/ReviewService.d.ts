import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { Review } from '../models/Review';
import type { UpdateReviewDto } from '../models/UpdateReviewDto';
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
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    updateReview({ id, requestBody, }: {
        id: number;
        requestBody: UpdateReviewDto;
    }): CancelablePromise<Review>;
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    deleteReview({ id, }: {
        id: number;
    }): CancelablePromise<Review>;
}
