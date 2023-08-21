/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { URLDto } from './URLDto';

export type CreateRequestSourcingDto = {
  name: NameDto;
  description?: string;
  photos: Array<PhotoDto>;
  link: URLDto;
};

