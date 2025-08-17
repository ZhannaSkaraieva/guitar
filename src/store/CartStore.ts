import { create } from "zustand";   

interface CartStore {
    couponCode: string;
    setCouponCode: (couponCode: string) => void;
    appliedCoupon:  null | "success" | "error";
    setAppliedCoupon: (appliedCoupon: null | "success" | "error" ) => void;
    discountValue: number;
    setDiscountValue: (discountValue: number) => void;
    discountType: 'percentage' | 'fixed';
    setDiscountType: (discountType: 'percentage' | 'fixed') => void;

}

export const useCartStore = create<CartStore>((set) => ({
    couponCode: '',
    setCouponCode: (couponCode) => set(() => ({ couponCode })),

    appliedCoupon: null,
    setAppliedCoupon: (appliedCoupon) => set(() => ({ appliedCoupon })),

    discountValue: 0,
    setDiscountValue: (discountValue) => set(() => ({ discountValue })),

    discountType: 'percentage',
    setDiscountType: (discountType) => set(() => ({ discountType })),



}));
