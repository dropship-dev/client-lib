/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileType } from './FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';

export type FileCreateTemplate = {
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
    file: string;
    subName?: string;
    name: string;
  }>;
  properties?: PrismaJson_PodFileProperties;
  type: FileType;
  size?: string;
  file?: string;
};

