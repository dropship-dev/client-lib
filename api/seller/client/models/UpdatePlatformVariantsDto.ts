/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';

export type UpdatePlatformVariantsDto = Array<{
  photo?: PhotoDto;
  price?: number;
  name?: NameDto;
  id: number;
}>;
