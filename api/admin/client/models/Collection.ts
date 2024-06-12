/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionStatus } from './CollectionStatus';
import type { CollectionType } from './CollectionType';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_ConditionCollection } from './PrismaJson_ConditionCollection';
import type { PrismaJson_Photos } from './PrismaJson_Photos';

/**
 * Model Collection
 */
export type Collection = {
  updatedAt: string;
  createdAt: string;
  /**
   * SEO
   */
  SEO: Prisma_JsonValue | null;
  description: string | null;
  queriesRaw: string | null;
  /**
   * [ConditionCollection]
   */
  condition: PrismaJson_ConditionCollection | null;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  name: string;
  status: CollectionStatus;
  type: CollectionType;
  storeId: string;
  id: number;
};

