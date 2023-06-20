export type CreateCollectionDto = {
    name: string;
    photo: string;
    condition: {
        value: string;
        operator: string;
        field: string;
    };
    description?: string;
    storeId: number;
};
