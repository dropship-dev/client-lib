export type CreatEventDto = {
    name: string;
    environmentId?: string;
    storeId?: string;
    fulfillmentId?: number;
    productId?: string;
    variantId?: string;
    platformProductId?: number;
    count?: number;
};
