export type FileTemplate = {
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
    file?: string;
    podPrintAreaId: number;
};
