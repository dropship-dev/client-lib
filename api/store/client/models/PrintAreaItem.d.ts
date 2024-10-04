export type PrintAreaItem = {
    photos?: Array<{
        color: string;
        url: string;
    }>;
    printAreaBounds?: Array<{
        'y': number;
        'x': number;
    }>;
    faPrice: number;
    supplierCost: number;
    name: string;
};
