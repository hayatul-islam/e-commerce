import { useContext, useEffect, useRef, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { ProductsContext } from "../../context";

export default function TableRaw({ product }) {
  const { id, title, thumbnail, price, quantity: productQuantity } = product;
  const { handleRemoveCart, handleQuantity } = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(productQuantity);

  const subtotal = parseInt(quantity) * parseInt(price);
  const quantityRef = useRef();

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   handleQuantity(id, value);
  // };

  const handleChange = (type) => {
    type === "increase"
      ? setQuantity((prev) => parseInt(prev) + 1)
      : setQuantity((prev) => parseInt(prev) - 1);
  };

  useEffect(() => {
    handleQuantity(id, quantity);
  }, [quantity]);

  return (
    <tr className="border">
      <td className="border px-2 ">
        <MdOutlineClose
          onClick={() => handleRemoveCart(id)}
          className="mt-1 text-red-600 cursor-pointer"
        />
      </td>
      <td className="border p-2 hidden md:block">
        <img className="w-10 h-10" src={thumbnail} alt="" />
      </td>
      <td className="border px-2 text-blue-600 font-medium">{title}</td>
      <td className="border px-2">${price}</td>
      <td className="border px-2 ">
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
            ref={quantityRef}
            type="number"
            // onChange={(e) => handleQuantity(id, e.target.value)}
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
          onChange={handleChange}
          className="w-16"
          defaultValue={quantity}
          type="number"
        /> */}
      </td>
      <td className="border px-2">${subtotal ? subtotal : "0"}</td>
    </tr>
  );
}
