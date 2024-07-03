export type GetListCategoryByCategory = {
    ProductType: Array<{
        categoryId: number;
        totalTemplate?: number;
        createdAt: string;
        name: string;
        id: number;
    }>;
    createdAt: string;
    totalTemplate?: number;
    name: string;
    fulfillmentAgencyId: number;
    id: number;
};
