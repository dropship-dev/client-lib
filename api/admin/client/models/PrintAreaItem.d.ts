export type PrintAreaItem = {
    groupLayers?: Array<{
        height?: number;
        width?: number;
        left?: number;
        top?: number;
        opacity?: number;
        blendMode?: string;
        url: string;
        subName?: string;
        name: string;
    }>;
    printAreaBounds?: Array<{
        'y': number;
        'x': number;
    }>;
    meshPoints?: Array<number>;
    faPrice: number;
    supplierCost: number;
    name: string;
};
