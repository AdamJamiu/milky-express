import { Link } from "react-router-dom";
import emptyCart from "/empty-cart.svg";
import trashIcon from "/delete.svg";
import padlockIcon from "/padlock.png";
import { useState } from "react";
import { formatCurrency } from "../utils";
import { useCart } from "../components/contexts";

const Cart = () => {
  const { addItemToCart, cartItems, removeItemFromCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => ++prev);
  const decreaseQuantity = () => setQuantity((prev) => --prev);

  return (
    <div className="p-7 sm:px-14 md:p-20 font-poppins">
      <Link
        to="/"
        className="w-max flex flex-row justify-start items-center gap-3 flex-nowrap"
      >
        <p className="text-2xl">&#x2039;</p>
        <p className="font-medium">Continue Shopping</p>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full mt-7">
        <div className="w-full pt-7 border-t">
          <h1 className="font-semibold text-2xl">Cart</h1>
          <p className="text-[#949494] mt-3 text-sm">
            You have {cartItems?.length} item (s) in your cart
          </p>

          <div className="mt-10 space-y-10">
            {cartItems?.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl shadow-lg flex flex-row justify-between items-center sm:flex-nowrap flex-wrap p-5 gap-4"
              >
                <div className="flex items-center justify-start gap-3">
                  <img src={item?.image} className="w-20 rounded-2xl" />
                  <p className="font-medium text-sm">{item.name}</p>
                </div>

                <div className="flex flex-row justify-start items-center w-max ">
                  <button
                    onClick={increaseQuantity}
                    className="font-semibold text-xl active:scale-105 px-3"
                  >
                    +
                  </button>
                  <p className="py-2 px-5 rounded-xl border text-lg text-[#888888]">
                    {quantity}
                  </p>

                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity < 2}
                    className="font-semibold text-xl disabled:cursor-not-allowed disabled:opacity-50 active:scale-105 px-3"
                  >
                    -
                  </button>
                </div>

                <p className="font-semibold text-sm">
                  {formatCurrency(item.price)}
                </p>
                <img
                  onClick={() => removeItemFromCart(index)}
                  src={trashIcon}
                  className="w-5 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {cartItems?.length > 0 ? (
          <div className="w-full rounded-xl bg-[#F9F9F9] py-5 px-2 sm:p-10">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <p className="text-[#949494] font-medium mt-4 text-sm">
              Complete your purchase by filling the information below
            </p>

            <div className="w-full flex flex-row justify-start items-center flex-wrap gap-5 mt-10">
              <input
                placeholder="First Name"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full sm:flex-1"
              />
              <input
                placeholder="Last Name"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full sm:flex-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full flex-auto"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto"
              />
            </div>

            <h1 className="text-lg font-semibold my-7">Shopping Address</h1>

            <div className="w-full flex flex-row justify-start items-center flex-wrap gap-5">
              <input
                placeholder="Address"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full flex-auto"
              />

              <input
                placeholder="Country"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full flex-auto"
              />

              <input
                placeholder="State"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full sm:flex-1"
              />

              <input
                placeholder="City"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full sm:flex-1 "
              />

              <textarea
                rows={3}
                placeholder="Additional Information"
                className="border border-[#BCBCBC] text-sm rounded-xl p-3 w-full flex-auto"
              />

              <div className="w-full flex-auto">
                <label className="text-sm">Coupon (optional)</label>
                <input className="border border-[#BCBCBC] rounded-xl p-3 w-full mt-3" />
              </div>

              <div className="mt-5 w-full text-sm flex flex-row justify-between items-center gap-4">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">N14,000</p>
              </div>

              <div className="mt-1 w-full text-sm flex flex-row justify-between items-center gap-4">
                <p className="font-semibold">Shipping</p>
                <p className="font-semibold">N1,500</p>
              </div>

              <div className="mt-1 w-full text-sm flex flex-row justify-between items-center gap-4">
                <p className="font-semibold">Discount</p>
                <p className="font-semibold">-N500</p>
              </div>

              <div className="mt-1 w-full text-xl flex flex-row justify-between items-center gap-4">
                <p className="font-bold">Total</p>
                <p className="font-bold">-N500</p>
              </div>

              <Link
                to="/order-successful"
                className="mt-7 text-center font-medium bg-[#FF1A71] text-sm rounded-xl px-4 py-3 w-full text-white"
              >
                Pay N15,000
              </Link>

              <div className="w-full flex flex-row justify-center items-start sm:items-center gap-2 sm:gap-1 text-sm text-center text-[#A7A7A7]">
                <img src={padlockIcon} />
                <p className="min-w-max">Payments are secure and encrypted</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-10 flex flex-col justify-center items-start gap-5 w-full">
            <img src={emptyCart} />
            <p>Your cart is empty!</p>
            <Link
              to="/"
              className="rounded-md text-white px-3 py-2 bg-[#FF1A71] text-sm disabled:cursor-not-allowed disabled:opacity-45"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
