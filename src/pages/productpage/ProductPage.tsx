import React from "react";
import { useParams } from "react-router-dom";
import { Guitar } from "../../Data";

interface ProductPageProps {
  guitars: Guitar[];
}

export const ProductPage: React.FC<ProductPageProps> = ({ guitars }) => {
  const { id } = useParams();
  const result = guitars.find((g) => g.id === Number(id));
  return (
    <>
      <div className="min-h-screen text-black text-3xl p-10">
        <p>Здесь будет карточка товара</p>
        {id};
      </div>
      {guitars.map((guitar) => (
        <div key={guitar.id}>
          <img src={guitar.image} alt={guitar.title} />
          <p>{guitar.title}</p>
        </div>
      ))}
    </>
  );
};
