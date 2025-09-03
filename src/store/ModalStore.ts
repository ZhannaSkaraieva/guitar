import { create } from "zustand";
interface ModalStore {
  //универсальное состояние модалки 
  modal: React.ReactElement | null;
  setModallel: (el: React.ReactElement|null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  //универсальное состояние модалки 
  modal: null,// по умолчанию ничего не отображается
  setModallel: (el) => set(()=>({ modal: el })),
}));

// закрыть любую модалку
// <button
//   onClick={() => setModallel(null)}
// >
// </button>

//прокидывание любого состояния элемента
// <button
//   onClick={() =>
//     setModallel(
//       <ModalCard
//         guitarId={guitar.id}
//       />,
//     )
//   }
//   >
// </button>