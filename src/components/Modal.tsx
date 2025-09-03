import React from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../store/ModalStore";

const Modal= () => {
  const modal = useModalStore((state) => state.modal);
  const setModallel = useModalStore((state) => state.setModallel);

  if (!modal) return null; // если модалки нет → ничего не рендерим

  const onClose = () => setModallel(null);

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center bg-black/50 pt-10"
      onClick={onClose}
    >
      {/*закрытие модалки вне окна**/}
      <div
        className="flex flex-col w-[450px] h-auto  inset-0 bg-white bg-opacity-50 items-start overflow-y-auto z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {/**останавливает клик закрытия внутри модального окна, если нажать на поле модалки */}
        <div className="flex w-full justify-end px-3">
          {/**ЗАКРЫТИЕ ФОРМЫ */}
          <span
            onClick={onClose}
            className="cursor-pointer text-2xl leading-non"
          >
            &times;
          </span>
        </div>
        {modal}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
