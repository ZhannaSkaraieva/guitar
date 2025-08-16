import React, { useState } from "react";
import { Guitar } from "../../../Data";
import { useParams } from "react-router-dom";
import Guitars from "../../../Data";
import Line41 from "../../../assets/Line41";

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
      <div className="flex flex-col items-start w-96 mb-4 ">
        <div className="flex w-full">
          <button
            onClick={() => handleTabClick("characteristics")}
            className=" flex-1 w-[180px] h-[40px]  border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-sm text-white leading-none tracking-[5%] text-center"
          >
            Характеристики
          </button>
          <button
            onClick={() => handleTabClick("description")}
            className="flex-1 w-[180px] h-[40px]  border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-[5%] text-center text-[#585757]"
          >
            Описание
          </button>
        </div>

        {activeTab === "characteristics" && (
          <div className="flex flex-col justify-between w-full ">
            <p className="flex justify-between w-full mt-3 mb-1">
              <span className="font-[Open_Sans] font-semibold text-sm">
                Артикул:
              </span>{" "}
              <span>{guitar.article}</span>
            </p>
            <p className="flex justify-between w-full my-1">
              <span className="font-[Open_Sans] font-semibold text-sm">
                Тип:
              </span>{" "}
              <span>{guitar.type}</span>
            </p>
            <p className="flex justify-between w-full my-1">
              <span className="font-[Open_Sans] font-semibold text-sm">
                Количество струн:
              </span>{" "}
              <span>{guitar.strings} струнная</span>
            </p>
          </div>
        )}

        {activeTab === "description" && (
          <div>
            <p>{guitar.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tab;
