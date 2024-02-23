import { useState } from "react";
import { toast } from "react-toastify";
import { ProductsContext } from "../context";
import { useFetchAllProducts } from "../hooks";
import getFindProduct from "../utils/getFindProduct";

const ProductProvider = ({ children }) => {
  const allProducts = useFetchAllProducts();
  const initialCartData = localStorage.getItem("carts");
  const parsedCartData = initialCartData ? JSON.parse(initialCartData) : [];
  const [cartData, setCartData] = useState(parsedCartData);
  const [searchQuery, setSearchQuery] = useState("");
  const [skip, setSkip] = useState(0);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [showData, setShowData] = useState("all");
  const limit = 30;
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000,
    rating: 1,
    categories: [],
    brands: [],
    skip: 0,
    limit,
  });

  // cart functionality
  const handleAddToCart = (product, quantity) => {
    const findProduct = getFindProduct(cartData, product?.id);

    if (findProduct) {
      return toast.warn("Product already add to cart.");
      // if (!quantity || quantity === findProduct?.quantity) {
      //   return toast.warn("Product already add to cart.");
      // }
      // return handleQuantity(product?.id, quantity);
    }
    product.quantity = 1;
    setCartData([...cartData, product]);
    localStorage.setItem("carts", JSON.stringify([...cartData, product]));
  };

  const handleRemoveCart = (id) => {
    const data = cartData?.filter((p) => p.id !== Number(id));
    setCartData(data);
    localStorage.setItem("carts", JSON.stringify(data));
  };

  const handleQuantity = (id, quantity) => {
    const updateData = cartData?.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity,
        };
      } else {
        return item;
      }
    });

    if (quantity > 0) {
      setCartData(updateData);
      localStorage.setItem("carts", JSON.stringify(updateData));
    } else {
      toast.warn("Quantity must be at least 1.");
    }
  };

  const handleOrderPlace = () => {
    setCartData([]);
    localStorage.setItem("carts", []);
    toast.success("Your order has been successful.");
  };

  const subtotal = cartData?.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    return total + itemPrice;
  }, 0);

  // search functionality
  const handleSearchQuery = (value) => {
    setSearchQuery(value);
    setShowData("all");
  };

  // pagination functionality
  const currentPage = skip / limit;
  const handleSkip = (item) => {
    if (item === "prev") {
      const skipData = skip - limit;
      setSkip(skipData);
      setFilters({
        ...filters,
        skip: skipData,
      });
    } else if (item === "next") {
      const skipData = skip + limit;
      setSkip(skipData);
      setFilters({
        ...filters,
        skip: skipData,
      });
    } else {
      const skipData = limit * item;
      setSkip(skipData);
      setFilters({
        ...filters,
        skip: skipData,
      });
    }
  };

  // filter functionality
  const openFilter = () => {
    setIsOpenFilter(true);
  };

  const closeFilter = () => {
    setIsOpenFilter(false);
  };

  const handleFilter = (item, value) => {
    if (item === "brands" || item === "categories") {
      const isInclude = filters[item]?.includes(value);
      if (isInclude) {
        const filtered = filters[item]?.filter((i) => i !== value);
        setFilters({
          ...filters,
          [item]: filtered,
          skip: 0,
        });
      } else {
        setFilters({
          ...filters,
          [item]: [...filters[item], value],
          skip: 0,
        });
      }
    } else {
      setFilters({
        ...filters,
        [item]: value,
        skip: 0,
      });
    }

    setSkip(0);
    setShowData("filter");
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        cartData,
        subtotal,
        handleAddToCart,
        handleRemoveCart,
        handleQuantity,
        handleOrderPlace,
        searchQuery,
        handleSearchQuery,
        skip,
        limit,
        currentPage,
        handleSkip,
        filters,
        handleFilter,
        isOpenFilter,
        openFilter,
        closeFilter,
        showData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
