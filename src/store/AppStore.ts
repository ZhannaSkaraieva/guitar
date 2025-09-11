import { create } from "zustand";
import { ProductPage } from "../pages/productpage/ProductPage";

interface AppStore {
  minPrice: number;
  setMinPrice: (minPrice: number) => void;
  maxPrice: number;
  setMaxPrice: (maxPrice: number) => void;
  sortByTypes: string[];
  setSortByTypes: (type: string) => void;
  sortByStrings: number[];
  setSortByStrings: (sortByStrings: number) => void;

  //сортировка товара по цене и популярности
  sortBy: "price" | "rating"| null;
  sortOrder: "asc" | "desc";
  setSortBy: (sortBy: "price" | "rating") => void;
  setSortOrder: (order: "asc" | "desc") => void;

  //поиск по названию
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;


  curentPage: number;
  setCurrentPage: (currentPage: number) => void;
  inputSuggestions: string[];
  setInputSuggestions: (inputSuggestions: string[]) => void;
  
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

  //сортировка товара по цене и популярности
  sortBy: null,
  sortOrder: "asc",
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (order) => set({ sortOrder: order }),

  curentPage: 1,
  setCurrentPage: (curentPage) => set(() => ({ curentPage })),

  //поиск по названию
  inputValue: "",
  setInputValue: (inputValue) => set(() => ({ inputValue })),
  isOpen: true,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),


  inputSuggestions: [],
  setInputSuggestions: (inputSuggestions) => set(() => ({ inputSuggestions })),

  
}));
