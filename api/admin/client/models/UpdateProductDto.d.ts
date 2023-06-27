export type UpdateProductDto = {
    name?: string;
    description?: string;
    details?: string;
    photos?: Array<string>;
    shippingFee?: number;
    shippingFeeAdditional?: number;
};
