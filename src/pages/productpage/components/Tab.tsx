import React, { useState } from "react";
import { Guitar } from "../../../Data";

interface TabProps {
  guitar: Guitar;
}

const Tab: React.FC<TabProps> = ({ guitar }) => {
  const [activeTab, setActiveTab] = useState("characteristics");

  const handleTabClick = (tab: string) => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex justify-start ">
        <div className="flex flex-col items-start w-96 h-[190px] mb-4 ">
          <div className="flex w-full">
            <button
              onClick={() => handleTabClick("characteristics")}
              className={`${activeTab === "characteristics" ? "bg-black  text-white" : "bg-white text-black"} flex-1 w-[180px] h-[40px]  border-2  border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-sm leading-none tracking-[5%] text-center `}
            >
              Характеристики
            </button>
            <button
              onClick={() => handleTabClick("description")}
              className={`${activeTab === "description" ? "bg-black  text-white" : "bg-white text-black"} flex-1 w-[180px] h-[40px]  border-2 border-black font-[Open_Sans] font-bold rounded-xs  not-italic text-sm leading-none tracking-[5%] text-center `}
            >
              Описание
            </button>
          </div>

          {activeTab === "characteristics" && (
            <div className="flex flex-col justify-between w-full ">
              <p className="flex justify-between w-full mt-3 mb-1">
                <span className="font-[Open_Sans] font-semibold text-sm">
                  Артикул:
                </span>
                <span>{guitar.article}</span>
              </p>
              <p className="flex justify-between w-full my-1">
                <span className="font-[Open_Sans] font-semibold text-sm">
                  Тип:
                </span>
                <span>{guitar.type}</span>
              </p>
              <p className="flex justify-between w-full my-1">
                <span className="font-[Open_Sans] font-semibold text-sm">
                  Количество струн:
                </span>
                <span>{guitar.strings} струнная</span>
              </p>
            </div>
          )}

          {activeTab === "description" && (
            <div className=" mt-3 font-[Open_Sans] font-normal not-italic text-xs leading-none tracking-[5%] text-[#585757]">
              <p>{guitar.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tab;
