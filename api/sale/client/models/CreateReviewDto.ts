/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDto } from './EmailDto';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
export type CreateReviewDto = {
  name?: NameDto;
  email?: EmailDto;
  rating: number;
  comment: string;
  photos?: Array<PhotoDto>;
};

