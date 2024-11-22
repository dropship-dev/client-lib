/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';

export type FileUpdateDesign = {
  properties?: PrismaJson_PodFileProperties;
  podPrintAreaId?: number;
  type: FileType;
  backgroundUrl?: string;
  url?: string;
  fileName?: string;
  id?: number;
};

