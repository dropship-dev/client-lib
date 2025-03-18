/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PaymentDirectApiDto } from './PaymentDirectApiDto';
import type { PaymentOnboardingDto } from './PaymentOnboardingDto';
export type CreatePaymentDto = {
  type: _36_Enums_PaymentType;
  email: EmailDto;
  name: NameDto;
  paymentIntegrationType: (PaymentDirectApiDto | PaymentOnboardingDto);
};

