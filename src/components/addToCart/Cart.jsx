import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ProductsContext } from "../../context";

export default function Cart({ product }) {
  const { handleRemoveCart } = useContext(ProductsContext);
  const { title, price, thumbnail, quantity, id } = product;
  const subTotal = price * Number(quantity);
  return (
    <div className="space-y-2">
      <div className="flex justify-between border-b py-1">
        <div className="flex gap-2">
          <MdOutlineClose
            onClick={() => handleRemoveCart(id)}
            className="mt-1 text-red-600 cursor-pointer"
          />
          <div>
            <h3 className="text-blue-400 text-lg font-medium">{title}</h3>
            <p className="text-sm text-gray-400">
              {quantity} x ${price}
            </p>
          </div>
        </div>
        <div className="h-10 w-10 ">
          <img className="w-full h-full" src={thumbnail} alt={title} />
        </div>
      </div>
    </div>
  );
}
