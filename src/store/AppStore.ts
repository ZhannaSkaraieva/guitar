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
  sortBy: "ArrowUp" | "ArrowDown" | "SortPrice" | "SortRating" | "default";
  setSortBy: (
    sortBy: "ArrowUp" | "ArrowDown" | "SortPrice" | "SortRating",
  ) => void;
  curentPage: number;
  setCurrentPage: (currentPage: number) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  inputSuggestions: string[];
  setInputSuggestions: (inputSuggestions: string[]) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  //кнопка вызова модального окна
  isOpenModalId: number | null;
  setIsOpenModalId: (id: number | null) => void;

  //кнопка добавления товара в корзину
  isOpenModalAdd: boolean;
  setIsOpenModalAdd: (isOpenModalAdd: boolean) => void;
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
  setSortBy: (sortBy: "ArrowUp" | "ArrowDown" | "SortPrice" | "SortRating") =>
    set(() => ({ sortBy })),

  curentPage: 1,
  setCurrentPage: (curentPage) => set(() => ({ curentPage })),

  inputValue: "",
  setInputValue: (inputValue) => set(() => ({ inputValue })),

  inputSuggestions: [],
  setInputSuggestions: (inputSuggestions) => set(() => ({ inputSuggestions })),

  isOpen: true,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),

  isOpenModalId: null,
  setIsOpenModalId: (isOpenModalId) => set(() => ({ isOpenModalId })),

  isOpenModalAdd: false,
  setIsOpenModalAdd: (isOpenModalAdd) => set(() => ({ isOpenModalAdd })),
}));
