import { create } from "zustand";

interface AppStore {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  sortBy: "default",
  setSortBy: (sortBy: string) => set(() => ({ sortBy })),
}));
