import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useLayoutEffect, useState } from "react";
import product7 from "/product-7.png";
import { useCart } from "../components/contexts";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const productDetails = products.filter((item) => item.id === id);
  // console.log(productDetails);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, cartItems } = useCart();

  const increaseQuantity = () => setQuantity((prev) => ++prev);
  const decreaseQuantity = () => setQuantity((prev) => --prev);

  const detalisData = products?.filter((item) => item.id?.toString() === id);
  // console.log(detalisData);

  const relatedProducts = products?.filter((item) => {
    const currentProductNameWords = detalisData[0]?.name.split(" ");
    return currentProductNameWords.some((word) => item?.name.includes(word));
  });

  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("en-NG", {
      currency: "NGN",
    });

    // Format the amount and remove the currency symbol
    const formattedAmount = formatter.format(amount).replace(/NGN/, "").trim();

    return `${formattedAmount} NGN`;
  }

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
      addItemToCart({ name, image, description, id, price, quantity });
      toast.success("Item added to cart successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        toastId: id,
      });
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-poppins">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 flex-wrap md:flex-nowrap p-7 md:p-10 lg:p-20">
        <div className="h-full">
          <div className="w-full p-7 border rounded-lg shadow-md">
            <img src={detalisData[0]?.image} className="h-96 mx-auto" />
          </div>

          <div className="overflow-auto flex flex-row justify-start items-center gap-4 mt-5">
            <img src={product7} className="h-44 rounded-lg" />
            <img src={product7} className="h-44 rounded-lg" />
            <img src={product7} className="h-44 rounded-lg" />
          </div>
        </div>

        <div className="w-full py-5">
          <h1 className="text-3xl font-bold mb-5">{detalisData[0]?.name}</h1>
          <h2 className="text-2xl font-semibold">
            {formatCurrency(detalisData[0]?.price)}
          </h2>

          <p className="mt-5 text-[#9E9E9E] font-openSans">
            Imagine being a mother who works every morning and still having to
            take care of the baby. Our lactation cookies are specially made for
            you. Available in 2 flavors, you can have more than one kind of
            cookie because it’s so yummy. You might eat it too fast because it
            tastes so good
          </p>

          <button className="border border-[#FF1A71] text-[#FF1A71] font-medium my-7 py-2 px-4 rounded-md text-sm">
            Choose a flavor
          </button>

          <div className="w-full flex flex-row justify-start items-center flex-wrap gap-10 sm:gap-20 my-5">
            <button
              onClick={() =>
                handleAddToCart({
                  name: detalisData[0]?.name,
                  description: detalisData[0]?.description,
                  id: detalisData[0]?.id,
                  image: detalisData[0]?.image,
                  price: detalisData[0]?.price,
                  quantity,
                })
              }
              className="bg-[#FF1A71] text-white py-2 px-4 rounded-md"
            >
              Add to cart
            </button>

            <div className="flex flex-row justify-start items-center gap-1 w-max">
              <button
                onClick={increaseQuantity}
                className="font-semibold text-2xl active:scale-105 px-4"
              >
                +
              </button>
              <p className="py-2 px-6 rounded-md border text-lg">{quantity}</p>
              <button
                onClick={decreaseQuantity}
                disabled={quantity < 2}
                className="font-semibold text-2xl disabled:cursor-not-allowed disabled:opacity-50 active:scale-105 px-4"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-[#FFEAF2] sm:p-20 p-10 px-5 mt-20">
        <h1 className="w-full text-center font-semibold text-3xl">
          Related Products
        </h1>

        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedProducts?.map((item) => (
            <Link
              to={`/${item.id}`}
              className="border rounded-md px-4 pt-7 pb-5 h-full flex flex-col justify-between items-start bg-white"
            >
              <img src={item.image} className="self-center mx-auto h-full" />
              <p className="mb-3 font-semibold font-poppins text-lg">
                {item?.name}
              </p>
              <p className="mb-7 text-[#838383] font-openSans">
                {item?.description}
              </p>
              <div className="w-full flex flex-row font-poppins justify-between items-center gap-3">
                <p className="font-semibold text-lg">
                  {formatCurrency(item.price)}
                </p>

                <button
                  onClick={() =>
                    handleAddToCart({
                      name: detalisData[0]?.name,
                      description: detalisData[0]?.description,
                      id: detalisData[0]?.id,
                      image: detalisData[0]?.image,
                      price: detalisData[0]?.price,
                      quantity,
                    })
                  }
                  className="rounded-lg text-white px-3 py-2 bg-[#FF1A71]"
                >
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
