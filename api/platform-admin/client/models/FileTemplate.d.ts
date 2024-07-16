import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileTemplate = {
    properties?: PrismaJson_PodFileProperties;
    file?: string;
    type: FileType;
    podPrintAreaId?: number;
};
