import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileCreateTemplate = {
    properties?: PrismaJson_PodFileProperties;
    type: FileType;
    size?: string;
    file: string;
};