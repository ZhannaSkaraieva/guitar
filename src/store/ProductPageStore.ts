import { create } from "zustand";

interface Review {
  productId: number;
  id: number;
  name: string;

  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
  createdAt: string;
}

interface ReviewType {
  id: number;
  name: string;

  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
  createdAt: string;
}

interface ProductPageStore {
  openPopUpForm: boolean;
    setOpenPopUpForm: (open: boolean) => void;
    
    openPopUpFormAdd: boolean;
    setOpenPopUpFormAdd:(open: boolean) => void;

  reviews: Review[];
  addReviews: (review: Review) => void;
  setAddReviews: (addReviews: Review[]) => void;
}

export const useProductPageStore = create<ProductPageStore>((set) => ({
  openPopUpForm: false, //модальное окно открыто или закрыто
    setOpenPopUpForm: (open) => set(() => ({ openPopUpForm: open })),
  
    openPopUpFormAdd: false, //дополнительное модальное окно открыто или закрыто
    setOpenPopUpFormAdd:(open) => set(() => ({ openPopUpFormAdd: open })),

  reviews: [],
  addReviews: (review) =>
    set((state) => ({ reviews: [...state.reviews, review] })),
  setAddReviews: (reviews) => set({ reviews }), //это раскрытие массива (spread оператор), чтобы не потерять старые отзывы.
}));
