import React from "react";
import { useAppStore } from "../../../store/AppStore";

interface PaginationProps {
  cardsPerPage: number;
  totalCards: number;
}

const Pagination: React.FC<PaginationProps> = ({
  cardsPerPage,
  totalCards,
}) => {
  const currentPage = useAppStore((state) => state.curentPage);
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number, e: { preventDefault: () => void }) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <nav className="max-sm:hidden">
        <ul className="list-style-none flex">
          <button
            className=" relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300"
            onClick={(e) => paginate(currentPage - 1, e)}
            disabled={currentPage === 1}
          >
            Назад
          </button>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={(e) => paginate(number, e)}
                className={`relative block rounded px-3 py-1.5 text-sm transition-all duration-300 ${
                  currentPage === number
                }`}
                href="#!"
              >
                {number}
              </a>
            </li>
          ))}
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300"
            onClick={(e) => paginate(currentPage + 1, e)}
            disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
          >
            Далее
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
