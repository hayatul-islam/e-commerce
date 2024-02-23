import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductsContext } from "../../context";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  const { cartData, handleOrderPlace } = useContext(ProductsContext);

  const navigate = useNavigate();
  const handleOrder = () => {
    if (cartData?.length > 0) {
      handleOrderPlace();
      navigate("/");
    } else {
      toast.warn("Please add to cart product.");
    }
  };

  return (
    <>
      {cartData?.length > 0 ? (
        <form
          onSubmit={handleOrder}
          className="bg-white rounded-lg shadow-md p-6 my-4 grid md:flex gap-6"
        >
          <CheckoutForm />

          <div className="max-w-[500px] w-full">
            <OrderSummary />
            <div className="pt-8">
              <button
                type="submit"
                className="bg-primary px-4 py-3 text-white text-center w-full block"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <Link
            to="/"
            className="border px-4 py-2 shadow rounded border-primary text-primary hover:bg-gray-100"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </>
  );
}
