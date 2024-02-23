import { useContext, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Search() {
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
    <div className="relative w-full">
      <div className="absolute inset-y-0 end-2 flex items-center pe-3 pointer-events-none">
        <MdOutlineSearch className="text-white" size={20} />
      </div>

      <input
        onChange={handleChange}
        defaultValue={searchQuery}
        type="text"
        placeholder="Search..."
        className="w-full rounded-md text-white px-3 py-2 bg-transparent border borer-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
