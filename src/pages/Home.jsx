import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useLayoutEffect, useState } from "react";
import { formatCurrency } from "../utils/index";
import { useCart } from "../components/contexts";
import { toast } from "react-toastify";
// import "react"

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addItemToCart, cartItems } = useCart();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = ({ name, image, description, id, price }) => {
    // Check if any item in the cart has the same id
    const itemExists = cartItems.some((item) => item.id === id);
    if (itemExists) {
      toast.error("Item already exists in the cart", {
        autoClose: 2000,
        hideProgressBar: true,
        toastId: id,
      });
    } else {
      // Add the item to the cart
      addItemToCart({ name, image, description, id, price });
      toast.success("Item added to cart successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        toastId: id,
      });
    }
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
          <div
            key={item.id}
            className="border rounded-md px-4 pt-7 pb-5 h-full flex flex-col justify-between items-start"
          >
            <Link
              to={`/${item.id}`}
              className="flex flex-col justify-between items-start"
            >
              <img src={item.image} className="self-center mx-auto h-full" />
              <p className="mb-3 font-semibold font-poppins">{item?.name}</p>
              <p className="mb-7 text-[#838383]">{item?.description}</p>
            </Link>
            <div className="w-full flex flex-row font-poppins justify-between items-center gap-3">
              <p className="font-semibold">{formatCurrency(item.price)}</p>

              <button
                onClick={() =>
                  handleAddToCart({
                    name: item.name,
                    description: item.description,
                    id: item.id,
                    image: item.image,
                    price: item.price,
                  })
                }
                className="rounded-md text-white px-3 py-2 bg-[#FF1A71] text-sm disabled:cursor-not-allowed disabled:opacity-45"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
