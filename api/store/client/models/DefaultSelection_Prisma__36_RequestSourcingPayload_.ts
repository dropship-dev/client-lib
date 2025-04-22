/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_RequestSourcingStatus } from './_36_Enums_RequestSourcingStatus';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_RequestSourcingHistory } from './PrismaJson_RequestSourcingHistory';
export type DefaultSelection_Prisma__36_RequestSourcingPayload_ = {
  requestSourcingSnapshotId: number;
  productId: number;
  historyRequestSourcing: PrismaJson_RequestSourcingHistory;
  acceptByAdmin: boolean;
  acceptBySeller: boolean;
  rejectReasonByAdmin: string;
  rejectReasonBySeller: string;
  platformProductId: number;
  photos: PrismaJson_Photos;
  description: string;
  status: _36_Enums_RequestSourcingStatus;
  name: string;
  updatedAt: string;
  createdAt: string;
  isDeleted: boolean;
  storeId: string;
  id: number;
  link: string;
};

