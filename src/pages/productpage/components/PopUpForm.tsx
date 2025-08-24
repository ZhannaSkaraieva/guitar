import React, { useState } from "react";
import { useProductPageStore } from "../../../store/ProductPageStore";
import { Guitar } from "../../../Data";
import StrIcon from "../../../assets/StrIcon";
import PopUpFormAdd from "./PopUpFormAdd";
import { createPortal } from 'react-dom';
import Modal from "../../../components/Modal";

interface PopUpFormProps {
  guitar: Guitar;
}

const PopUpForm: React.FC<PopUpFormProps> = ({ guitar }) => {
  //отслеживание состояния открытой модалки и закрытия
  const openModal = useProductPageStore((state) => state.openPopUpForm);
  const setOpenModal = useProductPageStore((state) => state.setOpenPopUpForm);
  // создание новых отзывов
  const addReviews = useProductPageStore((state) => state.addReviews);
  const setAddReviews = useProductPageStore((state) => state.setAddReviews);
  //дополнительная модалка , открытие
  const openPopUpFormAdd = useProductPageStore((state) => state.openPopUpFormAdd);
  const setOpenPopUpFormAdd = useProductPageStore((state) => state.setOpenPopUpFormAdd);
  //установка состояния окон ввода отзыва
  const [name, setName] = useState("");
  const [advantages, setAdvantages] = useState("");
  const [disadvantages, setDisadvantages] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // обновление полей формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //создание нового отзыва
    const newReview = {
      id: Date.now(), // уникальный id
      name,
      advantages,
      disadvantages,
      comment,
      rating,
      productId: guitar.id,
      createdAt: new Date().toLocaleString(),
    };
    //запись отзыва в состояние и передача его в родительский компонент
    addReviews(newReview);
    setName("");
    setAdvantages("");
    setDisadvantages("");
    setComment("");
    setRating(0);
    //закрытие модалки
    setOpenModal(false);
// открытие второй модалки
    
      setOpenPopUpFormAdd(true);
   
  };
  {/*if (!openModal) return null;**/ }

  return (
    <>
      <div className="w-full">
        <div className="flex w-full mt-6 items-center justify-between px-10">
          <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[15px]">
            Оставить отзыв
          </h1>
        </div>
        <h3 className="my-4 px-10 font-[Open Sans] font-semibold not-italic text-lg leading-[20px] tracking-[5%] text-left">
          {guitar.title.toUpperCase()}
        </h3>

        {/** ФОРМА ДЛЯ ЗАПИСИ ОТЗЫВА */}
        <div>
          <form
            className="flex flex-col w-full h-full px-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row justify-between w-full mt-4">
              <div className="flex flex-col ">
                <label className=" flex font-[Open_Sans] font-normal not-italic text-sm leading-none tracking-[5%] text-left mb-2 text-[#585757]">
                  <span>Ваше Имя</span>
                  <span>
                    <StrIcon />
                  </span>
                </label>
                <input
                  type="text"
                  className="w-[175px] h-[30px] border border-[#585757] rounded px-3 mb-3"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className=" flex font-[Open_Sans] font-normal not-italic text-sm leading-none tracking-[5%] text-left mb-2 text-[#585757]">
                  <span>Ваша Оценка</span>{" "}
                  <span>
                    <StrIcon />
                  </span>
                </label>

                {/* Здесь будет компонент для выбора рейтинга */}
                <p>Звезды</p>
              </div>
            </div>
            <label className=" flex font-[Open_Sans] font-normal not-italic text-sm leading-none tracking-[5%] text-left mb-2 text-[#585757]">
              Достоинства
            </label>
            <input
              type="text"
              className="w-full h-[30px] border border-[#585757] rounded px-3 mb-3"
              placeholder="Введите достоинства товара"
              value={advantages}
              onChange={(e) => setAdvantages(e.target.value)}
            />
            <label className=" flex font-[Open_Sans] font-normal not-italic text-sm leading-none tracking-[5%] text-left mb-1 text-[#585757]">
              Недостатки
            </label>
            <input
              type="text"
              className="w-full h-[30px] border border-[#585757] rounded px-3 mb-3"
              placeholder="Введите недостатки товара"
              value={disadvantages}
              onChange={(e) => setDisadvantages(e.target.value)}
            />
            <label className=" flex font-[Open_Sans] font-normal not-italic text-sm leading-none tracking-[5%] text-left mb-1 text-[#585757]">
              Комментарий
            </label>
            <input
              type="text"
              className="w-full h-[90px] border border-[#585757] rounded px-3 mb-3"
              placeholder="Введите Комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex items-center justify-center py-10">
              {/**КНОПКА ОТПРАВКИ ОТЗЫВА */}
              <button
                type="submit"
                className="w-[190px] h-[45px]  bg-[#131212] rounded-xs font-[Open_Sans] text-base font-bold text-[#FFFFFF]"
                //{/*onClick={()=>setOpenPopUpFormAdd(true)}**/}
              >
                Отправить отзыв
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*{openPopUpFormAdd && (
        <Modal onClose={() => setOpenPopUpFormAdd(false)}>
          <PopUpFormAdd />
        </Modal>
      )}**/}

     {/** {openPopUpFormAdd && <PopUpFormAdd />}*/} 
    </>
  );
};

export default PopUpForm;
