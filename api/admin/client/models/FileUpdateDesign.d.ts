export type FileUpdateDesign = {
    properties?: Array<{
        file: string;
        rotate?: string;
        fontSize: number;
        fontFamily?: string;
        content?: string;
        left: number;
        top: number;
        width: number;
        height: number;
    }>;
    printAreaId?: number;
    file?: string;
    id: number;
};
