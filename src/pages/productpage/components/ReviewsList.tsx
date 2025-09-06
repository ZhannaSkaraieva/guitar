import React, { useState, useRef } from "react";
import RatingStar from "./StarList";
import GroupIcon from "../../../assets/GroupIcon";
import { useProductPageStore } from "../../../store/ProductPageStore";
import PopUpForm from "./PopUpForm";
import { Guitar } from "../../../Data";
import Review from "./ReviewItem";
import ReviewItem from "./ReviewItem";
import { useModalStore } from "../../../store/ModalStore";

interface RewiewsProps {
  guitar: Guitar;
  newReview: ReviewType;
  scrollToTop: () => void;
}

interface ReviewType {
  id: number;
  name: string;
  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
  
}
const ReviewsList: React.FC<RewiewsProps> = ({ guitar, scrollToTop }) => {

  const modal = useModalStore((state) => state.modal);
  const setModallel = useModalStore((state) => state.setModallel);

  // вызов массива отзывов
  const reviews = useProductPageStore((state) => state.reviews);
  //видимость только 3 отзывов
  const [visibleReviews, setVisibleReviews] = useState(3);
  //фильтрую отзывы только по id гитары
  const guitarReviews = reviews.filter(
    (review) => review.productId === guitar.id,
  );

  return (
    <>
      <div className="flex flex-row items-center w-full h-full p-4 justify-between">
        <h2 className=" font-[Open_Sans] text-2xl font-bold text-[#010101] mb-4">
          Отзывы
        </h2>

        {/**КНОПКА ОТКРЫТИЯ ФОРМЫ ДЛЯ ОТЗЫВА */}
        <button
          className="w-[190px] h-[40px] border-[#C90606] border-1 rounded-xs font-[Open_Sans] text-base font-bold text-[#C90606]"
          onClick={() =>
            setModallel(
              <PopUpForm guitar={guitar} />)}>
          Оставить отзыв
        </button>
      </div>

      <div>
        {/* СПИСОК ОТЗЫВОВ */}
        {guitarReviews.length > 0 ? ( //отображать отзывы по гитаре если они есть
          <>
            {guitarReviews.slice(0, visibleReviews).map((review) => (
              <ReviewItem key={review.id} newReview={review} />
            ))}
            {/**НАВИГАЦИЯ */}
            {guitarReviews.length > visibleReviews && (
              <div className="flex items-center justify-center ">
                <button
                  className="w-[300px] h-45px] bg-[#131212] rounded-xs font-[Open_Sans] text-base font-bold text-[#FFFFFF] p-2.5"
                  onClick={() => setVisibleReviews((prev) => prev + 3)}
                >
                  Показать еще отзывы
                </button>
              </div>
            )}
            <div className="flex items-center justify-end p-4">
              <button
                onClick={scrollToTop}
                className="w-[190px] h-[40px] border-[#C90606] border-1 rounded-xs font-[Open_Sans] font-bold text-[#C90606] text-center items-center flex justify-center "
              >
                <GroupIcon />
                Наверх
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Отзывов пока нет</p>
        )}
      </div>
    </>
  );
};

export default ReviewsList;
