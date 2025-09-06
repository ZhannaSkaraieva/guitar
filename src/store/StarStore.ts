import { create } from "zustand";
interface StarStore {
    currentRating: number; //текушее значение звезд, которое будте закрашено
    setCurrentRating: (currentRating: number) => void;
    maxValue: number; // количество звезд которое будет отрисовываться
    setMaxValue: (currentRating: number) => void;
    ratingAverage: [];
    setRatingAverage: (ratingAverage: []) => void;
    
}

export const useStarStore = create<StarStore>((set) => ({
    currentRating: 0,
    setCurrentRating: (currentRating) => set(() => ({ currentRating })),
    maxValue: 5,
    setMaxValue: (maxValue) => set(() => ({ maxValue })),
    ratingAverage: [],
    setRatingAverage: (ratingAverage:[])=>set(()=>({ratingAverage}))
}))