export type GetListCategoryByCatalog = {
    PodProductType: Array<{
        podCategoryId: number;
        createdAt: string;
        name: string;
        id: number;
    }>;
    createdAt: string;
    name: string;
    fulfillmentAgencyId: number;
    id: number;
};
