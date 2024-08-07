import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileCreateTemplate = {
    color?: Array<{
        value: string;
        name: string;
    }>;
    groupLayers?: Array<{
        file: string;
        name: string;
    }>;
    properties?: PrismaJson_PodFileProperties;
    type: FileType;
    size?: string;
    file?: string;
};
