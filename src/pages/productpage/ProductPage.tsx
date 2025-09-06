import React, { useContext,useRef } from "react";
import { useParams } from "react-router-dom";
import { Guitar } from "../../Data";
import Tab from "./components/Tab";
import Line41 from "../../assets/Line41";
import { CartContext } from "../../features/ContextProvider";
import ProductButton from "./components/ProductButton";
import Reviews from "./components/ReviewsList";
import ReviewsList from "./components/ReviewsList";
import StarRatingAverage from "./components/StarRatingAverage";

interface ProductPageProps {
  guitars: Guitar[];
  newReview: ReviewType;
}

interface ReviewType {
  id: number;
  name: string;
  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  guitars,
  newReview,
}) => {
  const { id } = useParams();
  const result = guitars.find((guitar) => guitar.id === Number(id));
  if (!result) {
    return <div>Товар не найден</div>;
  }

  //якорная ссылка на верх страницы
  const topPage = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => {
    topPage.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={topPage}
        className="flex flex-row justify-between items-center  w-full"
      >
        <div className="w-[220px] h-[260px] p-2.5 flex justify-center items-center">
          <img src={result.image} alt={result.title} className="" />
        </div>
        <div className="flex flex-col items-start ">
          <h3 className=" my-2 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
            {result.title.toUpperCase()}
          </h3>
          <StarRatingAverage productId={result.id} />
          <div className="flex flex-row  items-center mb-6"></div>
          <Tab guitar={result} />
        </div>
        <ProductButton guitar={result} />
      </div>
      <div className="flex flex-1 items-center justify-center w-full h-full my-8">
        <Line41 />
      </div>
      <ReviewsList
        guitar={result}
        newReview={newReview}
        scrollToTop={scrollToTop}
      />
    </>
  );
};
