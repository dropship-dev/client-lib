import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileUpdateDesign = {
    properties?: PrismaJson_PodFileProperties;
    podPrintAreaId?: number;
    type: FileType;
    file?: string;
    id?: number;
};
