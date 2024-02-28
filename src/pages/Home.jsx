import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useLayoutEffect, useState } from "react";
import { formatCurrency } from "../utils/index";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products?.filter((item) =>
    item.name?.toLowerCase()?.includes(searchQuery)
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-7 md:px-10 lg:px-20 py-10">
      <div className="w-full flex flex-row justify-between items-center md:flex-nowrap flex-wrap gap-5 font-poppins">
        <input
          onChange={handleSearch}
          placeholder="Product search"
          className="py-3 px-4 w-full md:w-72 bg-[#EDEDED] rounded-md"
        />

        <input
          placeholder="Choose category"
          className="py-3 px-4 w-full md:w-72 rounded-md bg-[#EDEDED]"
        />
      </div>

      <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
        {filteredProducts?.map((item) => (
          <Link
            to={`/${item.id}`}
            className="border rounded-md px-4 pt-7 pb-5 h-full flex flex-col justify-between items-start"
          >
            <img src={item.image} className="self-center mx-auto h-full" />
            <p className="mb-3 font-semibold font-poppins">{item?.name}</p>
            <p className="mb-7 text-[#838383]">{item?.description}</p>
            <div className="w-full flex flex-row font-poppins justify-between items-center gap-3">
              <p className="font-semibold">{formatCurrency(item.price)}</p>

              <button className="rounded-md text-white px-3 py-2 bg-[#FF1A71] text-sm">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
