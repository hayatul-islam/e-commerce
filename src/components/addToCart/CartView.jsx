import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context";
import TableRaw from "../checkout/TableRaw";

export default function CartView() {
  const { cartData, handleOrderPlace, subtotal } = useContext(ProductsContext);

  return (
    <>
      {cartData?.length > 0 ? (
        <div className="space-y-12 ">
          {cartData?.length > 0 && (
            <div className="space-y-3">
              <table className="w-full overflow-x-scroll">
                <thead>
                  <tr className="text-left">
                    <th className="border p-2"> </th>
                    <th className="border px-2 hidden md:block"> </th>
                    <th className="border p-2">Product</th>
                    <th className="border px-2">Price</th>
                    <th className="border px-2">Quantity</th>
                    <th className="border px-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.map((product) => (
                    <TableRaw key={product?.id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="max-w-[400px] w-full ml-auto space-y-4">
            <h2 className="text-2xl font-bold text-gray-600">Cart totals</h2>
            <div>
              <h3 className="flex gap-6 border px-4 py-2">
                <span className="w-[100px] font-medium">Subtotal</span>
                <span>${subtotal ? subtotal : "0"}</span>
              </h3>
              <div className="flex gap-6 border px-4 py-2">
                <p className="w-[100px] font-medium">Shipping</p>
                <div>
                  <p>Free shipping</p>
                  <p>Shipping will be updated during checkout.</p>
                </div>
              </div>
              <h3 className="flex gap-6 border px-4 py-2">
                <span className="w-[100px] font-medium">Total</span>
                <span>${subtotal ? subtotal : "0"}</span>
              </h3>
            </div>
            <Link
              to="/checkout"
              className="bg-primary px-4 py-3 text-white text-center w-full block"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
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
