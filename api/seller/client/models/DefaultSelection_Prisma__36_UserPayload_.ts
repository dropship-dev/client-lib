/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_UserRole } from './_36_Enums_UserRole';
import type { PrismaJson_FirebaseDeviceToken } from './PrismaJson_FirebaseDeviceToken';
export type DefaultSelection_Prisma__36_UserPayload_ = {
  subscriptionId: string;
  firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
  firstLogin: boolean;
  maxStaffStores: number;
  maxOwnedStores: number;
  shortId: string;
  role: _36_Enums_UserRole;
  invitedById: string;
  country: string;
  avatar: string;
  phone: string;
  email: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  id: string;
};

