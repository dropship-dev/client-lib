import type { LogoSize } from './LogoSize';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_Colors } from './PrismaJson_Colors';
/**
 * Model Theme
 */
export type Theme = {
    updatedAt: string;
    createdAt: string;
    themeTemplateId: number;
    storeId: string;
    isActivated: boolean | null;
    components: Prisma_JsonValue | null;
    /**
     * [Colors]
     */
    colors: PrismaJson_Colors;
    font: string;
    heroBanner: string;
    logoSize: LogoSize;
    logo: string;
    name: string;
    id: number;
};
