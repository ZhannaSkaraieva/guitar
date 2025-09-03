import { create } from "zustand";

interface ModalStore {
  isPopUpDeliteOpen: number | null;
  setIsPopUpDeliteOpen: (id: number | null) => void;
  //универсальное состояние модалки 
  modal: React.ReactElement | null;
  setModallel: (el: React.ReactElement|null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isPopUpDeliteOpen: null,
  setIsPopUpDeliteOpen: (id) => set(() => ({ isPopUpDeliteOpen: id })),
  //универсальное состояние модалки 
  modal: null,// по умолчанию ничего не отображается
  setModallel: (el) => set(()=>({ modal: el })),
}));
