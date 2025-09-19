import { create } from "zustand";
import { persist } from "zustand/middleware";

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

interface ProductPageStore {

  reviews: Review[];
  addReviews: (review: Review) => void;
  setAddReviews: (addReviews: Review[]) => void;
}

export const useProductPageStore = create<ProductPageStore>()(
  persist
    ((set) => ({
      reviews: [],
      addReviews: (review) =>set((state) => ({ reviews: [...state.reviews, review] })),//это раскрытие массива (spread оператор), чтобы не потерять старые отзывы.
      setAddReviews: (reviews) => set({ reviews })
    }),
      {
        name: "productPageStora"
     } 
    )
  )
