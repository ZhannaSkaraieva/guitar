import { create } from "zustand";

interface ModalStore {
  //кнопка вызова модального окна
  isOpenModalId: number | null;
  isClosedModalId: boolean;
  setIsOpenModalId: (id: number | null) => void;
  setIsClosedModalId: (isClosedModalId: boolean) => void;

  //кнопка добавления товара в корзину
  isOpenModalAdd: boolean;
  setIsOpenModalAdd: (isOpenModalAdd: boolean) => void;

  isPopUpDeliteOpen: number | null;
  setIsPopUpDeliteOpen: (id: number | null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpenModalId: null,
  setIsOpenModalId: (isOpenModalId) => set(() => ({ isOpenModalId })),

  isClosedModalId: false,
  setIsClosedModalId: (isClosedModalId) => set(() => ({ isClosedModalId })),

  isOpenModalAdd: false,
  setIsOpenModalAdd: (isOpenModalAdd) => set(() => ({ isOpenModalAdd })),

  isPopUpDeliteOpen: null,
  setIsPopUpDeliteOpen: (id) => set(() => ({ isPopUpDeliteOpen: id })),
}));
