/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileType } from './FileType';
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
  size: string | null;
  file: string | null;
  type: FileType;
  id: number;
};

