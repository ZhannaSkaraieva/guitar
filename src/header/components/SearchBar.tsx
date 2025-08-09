import React from "react";
import LoupeIcon from "../../assets/LoupeIcon";
import { useAppStore } from "../../store/AppStore";
import Guitars, { Guitar } from "../../Data";
import { Link } from "react-router-dom";

interface GuitarProps {
  guitar: Guitar;
}

const SearchBar = () => {
  const inputValue = useAppStore((state) => state.inputValue);
  const setInputValue = useAppStore((state) => state.setInputValue);

  const isOpen = useAppStore((state) => state.isOpen);
  const setIsOpen = useAppStore((state) => state.setIsOpen);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputValue(text);
  };

  const inputGuitarsHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.textContent || "";
    setInputValue(text);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const filteredGuitars = Guitars.filter((guitar) =>
    guitar.title.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <>
      <div className="relative flex w-[18.75rem] max-md:w-[2.5rem] h-10 ml-auto">
        <div>
          <LoupeIcon />
        </div>

        <input
          type="text"
          placeholder="Search?"
          className="w-full max-md:border-none border border-white pl-10"
          value={inputValue}
          onChange={handleSearch}
          onClick={inputClickHandler}
        />

        <ul className="absolute top-full left-0 w-full text-white bg-black  border max-h-30 wrap-anywhere overflow-y-auto z-10">
          {inputValue &&
            isOpen &&
            filteredGuitars.map((guitar) => {
              return (
                <li
                  key={guitar.id}
                  className="py-2 px-4  hover:bg-gray-400"
                  onClick={inputGuitarsHandler}
                >
                  <Link to={`/catalog/${guitar.id}`}>{guitar.title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
