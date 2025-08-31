import { create } from "zustand";

interface StarStore {
    currentRating: number;
    setCurrentRating: (currentRating: number) => void;

    maxValue: number;
    setMaxValue: (currentRating: number) => void;

    readOnly: boolean;
    setReadOnly: (readOnly: boolean) => void;

    ratingAverage: [];
    setRatingAverage: (ratingAverage: []) => void;

    
}

export const useStarStore = create<StarStore>((set) => ({

    currentRating: 0,
    setCurrentRating: (currentRating) => set(() => ({ currentRating })),

    maxValue: 5,
    setMaxValue: (maxValue) => set(() => ({ maxValue })),

    readOnly: false,
    setReadOnly: (readOnly) => set(() => ({ readOnly })),
    
    ratingAverage: [],
    setRatingAverage: (ratingAverage:[])=>set(()=>({ratingAverage}))
    

}))