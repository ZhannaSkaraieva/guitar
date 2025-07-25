import { create } from "zustand";

interface AppStore {
  minPrice: number;
  setMinPrice: (minPrice: number) => void;
  maxPrice: number;
  setMaxPrice: (maxPrice: number) => void;
  sortByTypes: string[];
  setSortByTypes: (type: string) => void;
  sortByStrings: number[];
  setSortByStrings: (sortByStrings: number) => void;
  sortBy: "ArrowUp" | "ArrowDown" | "ArrowPrice" | "ArrowRating"| "default";
  setSortBy: (sortBy: "ArrowUp" | "ArrowDown" | "ArrowPrice" | "ArrowRating") => void;
  curentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  minPrice: 0,
  setMinPrice: (minPrice) => set(() => ({ minPrice })),

  maxPrice: Infinity,
  setMaxPrice: (maxPrice) => set(() => ({ maxPrice })),

  sortByTypes: [],
  setSortByTypes: (type: string) =>
    set((state) => {
      const alreadySelected = state.sortByTypes.includes(type);
      return {
        sortByTypes: alreadySelected
          ? state.sortByTypes.filter((t) => t !== type)
          : [...state.sortByTypes, type],
      };
    }),

  sortByStrings: [],
  setSortByStrings: (string) =>
    set((state) => {
      const alreadySelected = state.sortByStrings.includes(string);
      return {
        sortByStrings: alreadySelected
          ? state.sortByStrings.filter((s) => s !== string)
          : [...state.sortByStrings, string],
      };
    }),

  sortBy: "default",
  setSortBy: (sortBy: "ArrowUp" | "ArrowDown" | "ArrowPrice" | "ArrowRating") => set(() => ({ sortBy })),

  curentPage: 1,
  setCurrentPage: (curentPage) => set(() => ({ curentPage})),
}));
