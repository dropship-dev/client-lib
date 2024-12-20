/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_AsyncTaskStatus } from './_36_Enums_AsyncTaskStatus';
import type { _36_Enums_AsyncTaskType } from './_36_Enums_AsyncTaskType';
import type { PrismaJson_AsyncTaskResult } from './PrismaJson_AsyncTaskResult';
export type DefaultSelection_Prisma__36_AsyncTaskPayload_ = {
  input: any;
  type: _36_Enums_AsyncTaskType;
  status: _36_Enums_AsyncTaskStatus;
  updatedAt: string;
  createdAt: string;
  id: string;
  result: PrismaJson_AsyncTaskResult;
};

