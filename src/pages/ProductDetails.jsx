import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const detalisData = products?.filter((item) => item.id?.toString() === id);
  //   console.log(detalisData);
  function formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("en-NG", {
      currency: "NGN",
    });

    // Format the amount and remove the currency symbol
    const formattedAmount = formatter.format(amount).replace(/NGN/, "").trim();

    return `${formattedAmount} NGN`;
  }

  return (
    <div className="px-7 md:px-10 lg:px-20 py-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 flex-wrap md:flex-nowrap">
        <div className="w-full h-full p-7 border rounded-lg">
          <img src={detalisData[0]?.image} className="h-96 mx-auto" />
        </div>

        <div className="w-full py-5">
          <h1 className="text-3xl font-bold mb-5">{detalisData[0]?.name}</h1>
          <h2 className="text-2xl font-semibold">
            {formatCurrency(detalisData[0]?.price)}
          </h2>

          <p className="mt-5 text-[#9E9E9E]">
            Imagine being a mother who works every morning and still having to
            take care of the baby. Our lactation cookies are specially made for
            you. Available in 2 flavors, you can have more than one kind of
            cookie because it’s so yummy. You might eat it too fast because it
            tastes so good
          </p>

          <button className="border border-[#FF1A71] text-[#FF1A71] font-medium my-7 py-2 px-4 rounded-md ">
            Choose a flavor
          </button>

          <div className="w-full flex flex-row justify-start items-center gap-4">
            <button className="bg-[#FF1A71] text-white font-medium my-7 py-2 px-4 rounded-md ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
