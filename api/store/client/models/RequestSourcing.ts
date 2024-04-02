/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_RequestSourcingHistory } from './PrismaJson_RequestSourcingHistory';
import type { RequestSourcingStatus } from './RequestSourcingStatus';
/**
 * Model RequestSourcing
 */
export type RequestSourcing = {
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
  platformProductId: number | null;
  storeId: string;
  productId: number | null;
  status: RequestSourcingStatus;
  /**
   * [RequestSourcingHistory]
   */
  historyRequestSourcing: PrismaJson_RequestSourcingHistory | null;
  acceptByAdmin: boolean;
  acceptBySeller: boolean;
  rejectReasonByAdmin: string | null;
  rejectReasonBySeller: string | null;
  link: string;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos;
  description: string | null;
  name: string | null;
  id: number;
};

