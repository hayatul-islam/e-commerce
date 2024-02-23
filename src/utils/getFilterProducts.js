const getFilterProducts = (data, filters) => {
  const filterData = data
    ?.filter((p) => {
      if (filters?.brands?.length > 0) {
        return filters.brands.some(
          (item) => item.toLowerCase() === p?.brand.toLowerCase()
        );
      }
      return p;
    })
    ?.filter((p) => {
      if (filters?.categories?.length > 0) {
        return filters.categories.some(
          (item) => item.toLowerCase() === p?.category.toLowerCase()
        );
      }
      return p;
    })
    ?.filter((p) => {
      if (
        parseFloat(p?.price) >= parseFloat(filters?.minPrice) &&
        parseFloat(p?.price) <= parseFloat(filters?.maxPrice)
      ) {
        return p;
      }
    })
    ?.filter((p) => {
      if (parseFloat(p?.rating) >= parseFloat(filters?.rating)) {
        return p;
      }
    });

  const skipData = filters?.skip;
  const limit = skipData + filters?.limit;

  return {
    data: filterData?.slice(skipData, limit),
    total: filterData?.length,
    skip: filters?.skip,
  };
};

export default getFilterProducts;
