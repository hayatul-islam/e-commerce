import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context";
import Cart from "./Cart";

export default function AddToCart({ page }) {
  const { cartData, subtotal } = useContext(ProductsContext);

  return (
    <div className={`w-full ${!page && "md:w-[280px]"} `}>
      <h2 className="text-3xl font-bold text-gray-600">Cart</h2>
      {cartData?.length <= 0 ? (
        <p className="text-gray-400 pt-3 font-medium">
          No products in the cart.
        </p>
      ) : (
        <div className="space-y-4">
          {cartData?.map((product) => (
            <Cart key={product?.id} product={product} />
          ))}
          <h2 className="text-gray-600 font-medium text-lg">
            <span className="font-bold">Subtotal:</span> ${subtotal}
          </h2>
          <div className="flex gap-3">
            <Link to="/cart-view" className="bg-primary px-4 py-2  text-white">
              View cart
            </Link>
            <Link to={`/checkout`} className="bg-primary px-4 py-2  text-white">
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
