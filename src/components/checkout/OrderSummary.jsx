import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context";

export default function OrderSummary() {
  const { cartData, handleOrderPlace, subtotal } = useContext(ProductsContext);

  const tax = (parseFloat(subtotal) * 0.1).toFixed(2);
  const shipping = subtotal > 2000 ? 10 : 5;
  const total = parseFloat(subtotal) + parseFloat(shipping) + parseFloat(tax);

  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold ">Order Summary</h2>
      <div className=" bg-gray-100 shadow-md rounded-lg p-6">
        <div className="space-y-2 pb-5 border-b">
          {cartData?.map((cart) => (
            <div key={cart?.id} className="space-y-1">
              <h4 className="font-medium">{cart?.title}</h4>
              <p className="flex justify-between items-center">
                <span>
                  ${cart?.price} x {cart?.quantity}
                </span>
                <span>
                  ${parseFloat(cart?.price) * parseFloat(cart?.quantity)}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center my-3">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span>Taxes</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="border-t-2  pt-3">
          <div className="flex justify-between items-center font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
