/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JsonArray } from './JsonArray';
import type { JsonObject } from './JsonObject';

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export type JsonValue = (string | number | boolean | JsonObject | JsonArray) | null;

