import type { _36_Enums_FileType } from './_36_Enums_FileType';
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
    type: _36_Enums_FileType;
    podPrintAreaId?: number;
};
