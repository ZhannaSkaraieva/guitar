import React from "react";

const cartList = [{}];

const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mr-10">
      <div className="block  bg-white">
        <a href="#!">
          <img
            className=""
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
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
    </div>
  );
};

export default Cards;
