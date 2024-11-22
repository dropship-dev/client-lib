import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileTemplate = {
    properties?: PrismaJson_PodFileProperties;
    color?: Array<{
        value: string;
        name: string;
    }>;
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
    backgroundUrl?: string;
    fileName?: string;
    type: FileType;
    podPrintAreaId?: number;
};
