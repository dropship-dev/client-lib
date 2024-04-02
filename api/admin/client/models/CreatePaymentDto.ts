/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PaymentType } from './PaymentType';

export type CreatePaymentDto = {
  type: PaymentType;
  email: EmailDto;
  name: NameDto;
  publishableKey: string;
  secretKey: string;
  companyName: string;
  companyAddress?: string;
  isShowCompanyAddress?: boolean;
};

