import { useContext, useEffect, useState } from "react";
import {
  MdOutlineClose,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context";
import { useFetchCategory } from "../../hooks";

export default function FilterProducts() {
  const { data: categories } = useFetchCategory();
  const { handleFilter, closeFilter, filters } = useContext(ProductsContext);
  const [isBrands, setIsBrands] = useState(true);
  const [isCategories, setIsCategories] = useState(true);

  const { id } = useParams();

  const brands = [
    "Apple",
    "Samsung",
    "Huawei",
    "OPPO",
    "HP Pavilion",
    "TC Reusable",
    "Designer Sun Glasses",
    "Ifei Home",
    "LouisWill",
    "Eastern Watches",
    "Ghazi Fabric",
    "mastar watch",
    "SKMEI 9117",
    "Top Sweater",
    "Vintage Apparel",
    "Soft Cotton",
    "Bracelet",
    "Fashion Jewellery",
    "Sneakers",
    "Copenhagen Luxe",
  ];

  useEffect(() => {
    id && closeFilter();
  }, [id]);

  return (
    <div className="bg-white shadow border py-5 px-4 h-full space-y-6 relative">
      <div className="absolute top-4 right-4 ">
        <MdOutlineClose onClick={closeFilter} size={20} />
      </div>
      <div className="space-y-3">
        <h3 className="font-medium text-gray-500 text-lg border-b pb-1">
          Price range
        </h3>
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => handleFilter("minPrice", e.target.value)}
            type="number"
            min="0"
            max="2000"
            defaultValue={filters?.minPrice}
            className="w-24 bg-gray-200 rounded-lg outline-none p-2"
          />
          <span>To</span>
          <input
            onChange={(e) => handleFilter("maxPrice", e.target.value)}
            type="number"
            min="0"
            max="2000"
            defaultValue={filters?.maxPrice}
            className="w-24 bg-gray-200 rounded-lg outline-none p-2"
          />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-medium text-gray-500 text-lg border-b pb-1">
          Ratting
        </h3>
        <input
          onChange={(e) => handleFilter("rating", e.target.value)}
          type="range"
          min="3.5"
          max="5"
          step=".1"
          defaultValue={filters?.rating}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b pb-1">
          <h3 className="font-medium text-gray-500 text-lg ">Categories</h3>
          <button onClick={() => setIsCategories(!isCategories)}>
            {isCategories ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
        </div>

        {isCategories &&
          categories?.map((cat, index) => {
            const findData = filters?.categories?.find((i) => i === cat);

            return (
              <label key={index} className=" flex items-center cursor-pointer ">
                <input
                  type="checkbox"
                  className="form-radio h-4 w-4 text-blue-600"
                  name="cat"
                  value={cat}
                  checked={findData}
                  onChange={(e) => handleFilter("categories", e.target.value)}
                />
                <span className="ml-2 capitalize">{cat}</span>
              </label>
            );
          })}
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b pb-1">
          <h3 className="font-medium text-gray-500 text-lg ">Brands</h3>
          <button onClick={() => setIsBrands(!isBrands)}>
            {isBrands ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
        </div>
        {isBrands &&
          brands.map((brand, index) => {
            const findData = filters?.brands?.find((i) => i === brand);
            return (
              <label key={index} className=" flex items-center cursor-pointer ">
                <input
                  type="checkbox"
                  className="form-radio h-4 w-4 text-blue-600"
                  name="brand"
                  value={brand}
                  checked={findData}
                  onChange={(e) => handleFilter("brands", e.target.value)}
                />
                <span className="ml-2">{brand}</span>
              </label>
            );
          })}
      </div>
    </div>
  );
}
