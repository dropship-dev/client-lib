import type { FileType } from './FileType';
import type { PrismaJson_PodFileColors } from './PrismaJson_PodFileColors';
import type { PrismaJson_PodFileGroupLayers } from './PrismaJson_PodFileGroupLayers';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
/**
 * Model PodFile
 */
export type PodFile = {
    updatedAt: string;
    createdAt: string;
    /**
     * [PodFileProperties]
     */
    properties: PrismaJson_PodFileProperties | null;
    podDesignId: number | null;
    podPrintAreaId: number | null;
    podTemplateId: number | null;
    /**
     * [PodFileColors]
     */
    color: PrismaJson_PodFileColors | null;
    /**
     * [PodFileGroupLayers]
     */
    grouplayers: PrismaJson_PodFileGroupLayers | null;
    size: string | null;
    file: string | null;
    type: FileType;
    id: number;
};