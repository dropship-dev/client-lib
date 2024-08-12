export type PrintAreaItem = {
    printAreaBounds?: Array<{
        'y': number;
        'x': number;
    }>;
    meshPoints?: Array<number>;
    faPrice: number;
    supplierCost: number;
    name: string;
};
