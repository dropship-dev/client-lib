export type CreateReviewDto = {
    name?: string;
    email?: string;
    rating: number;
    comment: string;
    photos?: Array<string>;
    productId: number;
};
