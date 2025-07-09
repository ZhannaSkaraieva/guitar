import React from "react";
import Line18 from "../../../assets/Line18";
import Line19 from "../../../assets/Line19";

// Компонент CheckBox для фильтрации товаров в каталоге
const CheckBox = () => {
  return (
    <div className="w-full h-auto ">
      <h1 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Фильтр
      </h1>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ЦЕНЕ */}
      <div className="flex flex-col w-full">
        <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
          Цена
        </h2>
        <div className="w-full flex justify-between items-center mt-10 font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%]">
          <input
            type="number"
            placeholder="1000"
            className="w-full h-[30px] px-2 py-2 border border-gray-300 ounded-xs"
          />
          <Line19 />
          <input
            type="number"
            placeholder="3000"
            className="w-full h-[30px] px-2 py-2 border border-gray-300 ounded-xs"
          />
        </div>
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ТИПУ ГИТАР */}
      <div className="box-border">
        <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
          Тип гитар
        </h2>
        <form className="flex flex-col w-full mt-4 ">
          <label className="inline-flex items-center ">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              Акустические гитары
            </span>
          </label>
          <label className="inline-flex items-center ">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              Электрогитары
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              Укулеле
            </span>
          </label>
        </form>
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО КОЛИЧЕСТВУ СТРУН */}
      <div className="box-border">
        <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
          Количество струн
        </h2>
        <form className="flex flex-col w-full mt-4">
          <label className="inline-flex items-center ">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              4
            </span>
          </label>
          <label className="inline-flex items-center ">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              6
            </span>
          </label>
          <label className="inline-flex items-center ">
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value=""
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              7
            </span>
          </label>
        </form>
      </div>
      <div className="my-6">
        <Line18 />
      </div>
    </div>
  );
};

export default CheckBox;
