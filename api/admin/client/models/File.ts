/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileType } from './FileType';
import type { PrismaJson_FileProperties } from './PrismaJson_FileProperties';

/**
 * Model File
 */
export type File = {
  updatedAt: string;
  createdAt: string;
  /**
   * [FileProperties]
   */
  properties: PrismaJson_FileProperties | null;
  designId: number | null;
  printAreaId: number | null;
  templateId: number | null;
  file: string | null;
  type: FileType;
  id: number;
};

