/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailDto } from './EmailDto';

export type ContactFormDto = {
  name?: string;
  email: EmailDto;
  subject: string;
  message: string;
  sendCopy: boolean;
};

