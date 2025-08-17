interface Coupon {
  id: string;
  code: string;
  discount: number;
  isActive: boolean;
  type: "fixed" | "percentage";
}

const Coupons: Coupon[] = [
  {
    id: "1",
    code: "GITARAHIT",
    discount: 10,
    isActive: true,
    type: "percentage",
  },
  {
    id: "2",
    code: "SAVE20",
    discount: 2000,
    isActive: false,
    type: "fixed",
  },
];

export default Coupons;
//react portal!!!!!!!!!
//created add // time
