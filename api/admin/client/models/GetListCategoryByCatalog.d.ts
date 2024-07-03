export type GetListCategoryByCatalog = {
    ProductType: Array<{
        categoryId: number;
        createdAt: string;
        name: string;
        id: number;
    }>;
    createdAt: string;
    name: string;
    fulfillmentAgencyId: number;
    id: number;
};
