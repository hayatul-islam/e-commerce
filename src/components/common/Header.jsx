import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.webp";
import { ProductsContext } from "../../context";
import { useDebounce } from "../../hooks";
import Search from "./Search";

export default function Header() {
  const { handleSearchQuery, searchQuery, handleSkip, cartData } =
    useContext(ProductsContext);
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isSearch, setIsSearch] = useState(false);
  const navigate = useNavigate();

  const doSearch = useDebounce((term) => {
    handleSearchQuery(term);
    navigate("/");
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleSkip(0);
    doSearch(value);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 py-3 z-[999]">
      <div className="container px-4 py-2 flex gap-6 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="h-[40px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 max-w-lg w-full">
          <div className=" md:hidden relative  w-full flex justify-end">
            <div>
              <button
                onClick={() => setIsSearch((prev) => !prev)}
                className="text-white mt-1"
              >
                <MdOutlineSearch size={24} />
              </button>
              {isSearch && (
                <div className="absolute top-7 right-0 bg-black rounded">
                  <Search />
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block w-full">
            <Search />
          </div>

          <Link to="/cart-view" className="relative">
            <FaCartShopping className="text-white text-[24px] md:text-[30px]" />
            {cartData?.length > 0 && (
              <div className=" absolute top-0 right-0">
                <p className="text-red-500 font-bold bg-white shadow w-[15px] h-[15px] rounded-full flex justify-center items-center text-[14px]">
                  {cartData?.length}
                </p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
