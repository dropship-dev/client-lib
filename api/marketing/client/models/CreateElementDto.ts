/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateElement } from './CreateElement';
import type { ElementType } from './ElementType';

export type CreateElementDto = {
  name: string;
  type: ElementType;
  order?: number;
  payload: Array<CreateElement>;
};

