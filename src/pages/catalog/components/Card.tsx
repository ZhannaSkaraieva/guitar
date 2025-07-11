import React from "react";
import { Guitar } from '../../../Data';



// Компонент Cards для отображения карточек товаров в каталоге
interface GuitarProps {
  guitar: Guitar;
}
const Card: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <>
      <div className="block  bg-white">
        <a href="#!">
          <img
            className=""
            src={guitar.image}
            alt={guitar.title}
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          >
            Button
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
