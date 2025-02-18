import type { _36_Enums_CostCalculationMethod } from '../models/_36_Enums_CostCalculationMethod';
import type { _36_Enums_CouponApplyingMethod } from '../models/_36_Enums_CouponApplyingMethod';
import type { _36_Enums_CouponStatus } from '../models/_36_Enums_CouponStatus';
import type { _36_Enums_CouponType } from '../models/_36_Enums_CouponType';
import type { _36_Enums_FraudDetectionStatusType } from '../models/_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FraudDetectionType } from '../models/_36_Enums_FraudDetectionType';
import type { _36_Enums_PaymentType } from '../models/_36_Enums_PaymentType';
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { _36_Enums_StoreStatus } from '../models/_36_Enums_StoreStatus';
import type { _36_Enums_StoreType } from '../models/_36_Enums_StoreType';
import type { CreateCouponDto } from '../models/CreateCouponDto';
import type { CreateStoreDto } from '../models/CreateStoreDto';
import type { DeleteCouponsDto } from '../models/DeleteCouponsDto';
import type { FraudDetection } from '../models/FraudDetection';
import type { FraudStatusType } from '../models/FraudStatusType';
import type { FulfillmentAgency } from '../models/FulfillmentAgency';
import type { Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_ } from '../models/Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_';
import type { PrismaJson_CouponCombination } from '../models/PrismaJson_CouponCombination';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_ProductDiscountItems } from '../models/PrismaJson_ProductDiscountItems';
import type { PrismaJson_ProductRequirementItems } from '../models/PrismaJson_ProductRequirementItems';
import type { PrismaJson_Timezone } from '../models/PrismaJson_Timezone';
import type { PrismaJson_TypeOfFraudService } from '../models/PrismaJson_TypeOfFraudService';
import type { PrismaJson_UnavailableBalance } from '../models/PrismaJson_UnavailableBalance';
import type { Store } from '../models/Store';
import type { StoreUser } from '../models/StoreUser';
import type { UpdateCouponDto } from '../models/UpdateCouponDto';
import type { UpdateCouponStatusDto } from '../models/UpdateCouponStatusDto';
import type { UpdateStoreDto } from '../models/UpdateStoreDto';
import type { UpdateStoreStatusDto } from '../models/UpdateStoreStatusDto';
import type { Wallet } from '../models/Wallet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StoreService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStore({ requestBody, }: {
        requestBody: CreateStoreDto;
    }): CancelablePromise<{
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStores({ fulfillmentAgencyId, pageSize, status, periodFrom, nextPageIndex, name, userId, paymentGatewayIds, platformProductId, referralCode, fraudStatus, }: {
        fulfillmentAgencyId?: number;
        pageSize?: number;
        status?: Array<_36_Enums_StoreStatus>;
        periodFrom?: string;
        nextPageIndex?: string;
        name?: string;
        userId?: string;
        paymentGatewayIds?: Array<number>;
        platformProductId?: number;
        referralCode?: string;
        fraudStatus?: Array<FraudStatusType>;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            FraudDetection: Array<{
                labels: PrismaJson_TypeOfFraudService;
                idempotencyKey: string;
                orderId: string;
                systemFraudDetect: _36_Enums_FraudDetectionStatusType;
                humanFraudDetect: _36_Enums_FraudDetectionStatusType;
                type: _36_Enums_FraudDetectionType;
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                id: string;
            }>;
            StoreUser: Array<{
                role: _36_Enums_StoreRole;
            }>;
            referralCode: string;
            primaryDomain: string;
            subDomain: string;
            closedAt: string;
            avatar: string;
            Payment: Array<{
                type: _36_Enums_PaymentType;
                name: string;
                id: number;
            }>;
            timezone: PrismaJson_Timezone;
            status: _36_Enums_StoreStatus;
            phone: string;
            email: string;
            name: string;
            Wallet: Array<{
                updatedAt: string;
                createdAt: string;
                isDeleted: boolean;
                storeId: string;
                fulfillmentAgencyId: number;
                balanceUnavailable: PrismaJson_UnavailableBalance;
                payoutAmount: number;
                holdAmount: number;
                balanceDebt: number;
                balanceAvailable: number;
                balanceAmount: number;
                walletName: string;
                id: string;
            }>;
            FulfillmentAgency: {
                costCalculationMethod: _36_Enums_CostCalculationMethod;
                name: string;
            };
            createdAt: string;
            fulfillmentAgencyId: number;
            id: string;
            userRole: _36_Enums_StoreRole;
            fraudStatus: FraudStatusType;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<(Store & {
        FulfillmentAgency: FulfillmentAgency | null;
    } & {
        StoreUser: Array<StoreUser>;
    } & {
        FraudDetection: Array<FraudDetection>;
    } & {
        Wallet: Array<Wallet>;
    } & {
        fraudStatus?: FraudStatusType;
    } & {
        Payment: Array<Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_>;
    })>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStore({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateStoreDto;
    }): CancelablePromise<{
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStoreStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateStoreStatusDto;
    }): CancelablePromise<{
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    reactivateStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        stripeDefaultPaymentMethodId: string;
        stripeCustomerId: string;
        warning: boolean;
        currencyId: number;
        maxUsers: number;
        balance: number;
        referralCode: string;
        defaultBankAccount: string;
        shippingPolicy: string;
        termsOfService: string;
        privacyPolicy: string;
        refundPolicy: string;
        shippingFeeAdditional: number;
        shippingFee: number;
        primaryDomain: string;
        subDomain: string;
        pageName: string;
        closedAt: string;
        country: string;
        zipCode: string;
        city: string;
        apartmentAddress: string;
        address: string;
        avatar: string;
        timezone: PrismaJson_Timezone;
        type: _36_Enums_StoreType;
        status: _36_Enums_StoreStatus;
        phone: string;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        fulfillmentAgencyId: number;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStorePaymentMethod({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        publishableKey: string;
        isShowCompanyAddress: boolean;
        companyAddress: string;
        companyPhone: string;
        companyName: string;
        type: _36_Enums_PaymentType;
        email: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDebtPayment({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        balanceDebt: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getWarningStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        warning: boolean;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    toggleWarningStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    listCoupons({ storeId, searchTitle, types, statuses, applyingMethods, pageSize, nextPageIndex, }: {
        storeId: string;
        searchTitle?: string;
        types?: Array<_36_Enums_CouponType>;
        statuses?: Array<_36_Enums_CouponStatus>;
        applyingMethods?: Array<_36_Enums_CouponApplyingMethod>;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            applyingMethod: _36_Enums_CouponApplyingMethod;
            title: string;
            endDate: string;
            startDate: string;
            type: _36_Enums_CouponType;
            status: _36_Enums_CouponStatus;
            createdAt: string;
            id: string;
        }>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCoupon({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateCouponDto;
    }): CancelablePromise<{
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCoupons({ storeId, requestBody, }: {
        storeId: string;
        requestBody: DeleteCouponsDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateCoupon({ storeId, couponId, requestBody, }: {
        storeId: string;
        couponId: string;
        requestBody: UpdateCouponDto;
    }): CancelablePromise<{
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCoupon({ storeId, couponId, }: {
        storeId: string;
        couponId: string;
    }): CancelablePromise<({
        Products: Array<{
            isActive: boolean;
            photos: PrismaJson_Photos;
            name: string;
            id: number;
        }>;
    } & {
        availableDiscountUse: number;
        discountValue: PrismaJson_ProductDiscountItems;
        combination: PrismaJson_CouponCombination;
        maximumDiscountUses: PrismaJson_ProductRequirementItems;
        minimumPurchaseRequirement: PrismaJson_ProductRequirementItems;
        applyingMethod: _36_Enums_CouponApplyingMethod;
        discountCode: string;
        title: string;
        userUpdated: string;
        userCreated: string;
        endDate: string;
        startDate: string;
        type: _36_Enums_CouponType;
        status: _36_Enums_CouponStatus;
        updatedAt: string;
        createdAt: string;
        isDeleted: boolean;
        storeId: string;
        id: string;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateCouponStatus({ storeId, requestBody, }: {
        storeId: string;
        requestBody: UpdateCouponStatusDto;
    }): CancelablePromise<string>;
}
