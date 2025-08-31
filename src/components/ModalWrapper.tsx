import React from "react";
import { useModalStore } from "../store/ModalStore";

const ModalWrapper = () => {
  const modal = useModalStore((state) => state.modal);
  return <>{modal}</>;
};

export default ModalWrapper;
