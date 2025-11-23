import React, { useEffect } from "react";
import { useAppStore } from "../../../store/AppStore";
import Pagination from "./Pagination";
import { useProductPageStore } from "../../../store/ProductPageStore";
import { IProduct, IProducts } from "../../../utils/type";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: IProduct[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const minPrice = useAppStore((state) => state.minPrice);
  const maxPrice = useAppStore((state) => state.maxPrice);

  const SortByTypes = useAppStore((state) => state.sortByTypes);
  const SortByStrings = useAppStore((state) => state.sortByStrings);

  const sortBy = useAppStore((state) => state.sortBy); // price | rating | null
  const sortOrder = useAppStore((state) => state.sortOrder); // asc | desc

  const currentPage = useAppStore((state) => state.curentPage);
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);

  const inputValue = useAppStore((state) => state.inputValue);

  const reviews = useProductPageStore((state) => state.reviews);

  useEffect(() => {
    setCurrentPage(1);
  }, [minPrice, maxPrice, SortByTypes, SortByStrings, inputValue]);

  const productsPerPage = 12;
  const indexOfLastCards = currentPage * productsPerPage;
  const indexOfFirstCard = indexOfLastCards - productsPerPage;

  const filteredProducts = products.filter((product) => {
    const SortPrice = minPrice <= product.price && product.price <= maxPrice;
    const SortType =
      SortByTypes.length === 0 || SortByTypes.includes(product.type);
    const SortString =
      SortByStrings.length === 0 || SortByStrings.includes(product.properties?.strings || 0);
    const inputProduct =
      inputValue.trim() === "" ||
      product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      product.type.toLowerCase().includes(inputValue.toLowerCase());

    return SortPrice && SortType && SortString && inputProduct;
  });

  // фильтруем и добавляем средний рейтинг к каждому гитарному объекту
  const productsWithAvgRating = filteredProducts.map((p) => {
    const productReviews = reviews.filter((r) => r.productId === p.id);
    const totalRating = productReviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating =
      productReviews.length > 0 ? totalRating / productReviews.length : 0;

    return {
      ...p,
      averageRating,
    };
  });

  // сортировка по цене или рейтингу
  const sortedProducts = [...productsWithAvgRating].sort((a, b) => {
    const key = sortBy === "rating" ? "averageRating" : "price";
    if (sortOrder === "asc") return a[key] - b[key];
    return b[key] - a[key];
  });

  // пагинация
  const currentProducts = sortedProducts.slice(
    indexOfFirstCard,
    indexOfLastCards,
  );

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </>
  );
};

export default ProductList;
