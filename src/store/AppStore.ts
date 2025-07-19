import { create } from "zustand";

interface AppStore {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  minPrice: number | '';
  setMinPrice: (minPrice: number | '') => void;
  maxPrice: number | '';
  setMaxPrice: (maxPrice: number | '') => void;
}

export const useAppStore = create<AppStore>((set) => ({
  sortBy: "default",
  setSortBy: (sortBy: string) => set(() => ({ sortBy })),

  minPrice: '',
  setMinPrice: (minPrice: number | '') => set(() => ({ minPrice })),

  maxPrice: '',
  setMaxPrice: (maxPrice: number | '') => set(() => ({ maxPrice })),
}));
