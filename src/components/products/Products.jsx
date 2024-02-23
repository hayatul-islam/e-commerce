import { useContext } from "react";
import { ProductsContext } from "../../context";
import { useFetchProducts } from "../../hooks";
import getFilterProducts from "../../utils/getFilterProducts";
import Loading from "../common/Loading";
import Pagination from "../common/Pagination";
import Product from "./Product";
import ProductHeader from "./ProductHeader";

export default function Products() {
  const { limit, showData, allProducts, filters } = useContext(ProductsContext);
  const {
    data: { products, total: productsTotal },
    isLoading,
  } = useFetchProducts();
  const { data: filterData, total: filteredTotal } = getFilterProducts(
    allProducts?.data,
    filters
  );

  const data = showData === "filter" ? filterData : products;
  const total = showData === "filter" ? filteredTotal : productsTotal;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-gray-600">Shop</h2>
      {data?.length > 0 ? (
        <>
          <ProductHeader total={total} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {data?.map((product) => (
              <Product key={product?.id} product={product} />
            ))}
          </div>
          {total > limit && <Pagination total={total} />}
        </>
      ) : (
        <p className="text-xl font-medium text-gray-500">
          No product available!
        </p>
      )}
    </div>
  );
}
