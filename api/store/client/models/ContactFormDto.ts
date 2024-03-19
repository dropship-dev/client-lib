/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailDto } from './EmailDto';

export type ContactFormDto = {
  domain: string;
  name?: string;
  email: EmailDto;
  subject: string;
  message: string;
  sendCopy?: boolean;
};

