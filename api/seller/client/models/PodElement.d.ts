import type { ElementType } from './ElementType';
/**
 * Model PodElement
 */
export type PodElement = {
    updatedAt: string;
    createdAt: string;
    type: ElementType;
    link: string;
    name: string;
    id: number;
};
