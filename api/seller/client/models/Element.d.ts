import type { ElementType } from './ElementType';
/**
 * Model Element
 */
export type Element = {
    updatedAt: string;
    createdAt: string;
    type: ElementType;
    link: string;
    name: string;
    id: number;
};
