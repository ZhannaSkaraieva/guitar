import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/api";
import { IProduct, IProducts } from "../../../utils/type";
import ProductList from "./ProductList";

function ProductsQuery() {
  // Access the client
  //const queryClient = useQueryClient();

  // Queries
  const { isPending, isError, data, error } = useQuery<IProducts>({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <ProductList products={data?.products ?? []} />;
}
export default ProductsQuery;
