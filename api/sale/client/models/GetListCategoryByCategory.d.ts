export type GetListCategoryByCategory = {
    PodProductType: Array<{
        podCategoryId: number;
        totalTemplate: number;
        createdAt: string;
        name: string;
        id: number;
    }>;
    createdAt: string;
    totalTemplate: number;
    name: string;
    fulfillmentAgencyId: number;
    id: number;
};
