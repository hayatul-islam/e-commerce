import { useContext, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context";
import { useFetchProduct } from "../../hooks";
import getFindProduct from "../../utils/getFindProduct";
import Loading from "../common/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const { handleAddToCart, handleQuantity, cartData } =
    useContext(ProductsContext);
  const { data: product, isLoading } = useFetchProduct(id);

  const cartProduct = getFindProduct(cartData, id);
  const [quantity, setQuantity] = useState(cartProduct?.quantity ?? 1);

  const handleChange = (type) => {
    type === "increase"
      ? setQuantity((prev) => parseInt(prev) + 1)
      : setQuantity((prev) => parseInt(prev) - 1);
  };

  useEffect(() => {
    handleQuantity(product?.id, quantity);
  }, [quantity]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {product?.id ? (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img
                src={product?.thumbnail}
                alt=""
                className="w-full h-80 object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold ">{product?.title}</h1>
              <p className="text-lg font-bold text-red-400 ">
                ${product?.price}
              </p>
              <p className="text-base mb-4">{product?.description}</p>
              <div className="w-[300px]">
                <div className="flex rounded-lg shadow-sm pt-3 ">
                  <div className="relative flex items-center max-w-[8rem] border rounded">
                    <button
                      type="button"
                      onClick={() => handleChange("decrease")}
                      className={`px-2 ${quantity <= 1 && "opacity-50"}`}
                      disabled={quantity <= 1}
                    >
                      <FiMinus />
                    </button>
                    <input
                      type="number"
                      className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:outline-none block w-full py-2.5"
                      value={quantity}
                    />
                    <button
                      type="button"
                      onClick={() => handleChange("increase")}
                      className="px-2"
                    >
                      <FiPlus />
                    </button>
                  </div>

                  {/* <input
                    type="number"
                    onChange={(e) =>
                      handleQuantity(product?.id, e.target.value)
                    }
                    defaultValue={quantity}
                    className="py-3 px-2 w-[100px] border-gray-200 border focus:outline-none shadow-sm rounded-s-lg text-sm focus:z-10 "
                  /> */}
                  <button
                    onClick={() => handleAddToCart(product, quantity)}
                    type="button"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-primary text-white"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
              <button className="inline-block px-4 py-2 border-b-0 text-gray-600 border rounded-t-lg">
                Description
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium ">Description</h3>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No product found!</p>
      )}
    </>
  );
}
