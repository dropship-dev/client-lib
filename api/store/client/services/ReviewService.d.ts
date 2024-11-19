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
    createReview({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CreateReviewDto;
    }): CancelablePromise<Review>;
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    getAllReview({ storeId, productId, }: {
        storeId: string;
        productId: number;
    }): CancelablePromise<Array<Review>>;
    /**
     * @returns Review Ok
     * @throws ApiError
     */
    getReview({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<Review>;
}
