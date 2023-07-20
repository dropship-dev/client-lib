/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { RequestSourcingStatus } from './RequestSourcingStatus';

/**
 * Model RequestSourcing
 */
export type RequestSourcing = {
  updatedAt: string;
  createdAt: string;
  storeId: string;
  productId: number | null;
  status: RequestSourcingStatus;
  rejectReason: string | null;
  link: string;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  description: string | null;
  name: string;
  id: number;
};

