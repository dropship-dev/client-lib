/**
 * Model Wallet
 */
export type Wallet = {
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string | null;
    fulfillmentAgencyId: number | null;
    balanceSeller: number;
    balanceAmount: number;
    walletName: string | null;
    id: string;
};
