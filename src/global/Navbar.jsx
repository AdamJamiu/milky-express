import { Link } from "react-router-dom";
import logo from "/milky-logo.png";
import cartIcon from "/cart-icon.png";
import { useState } from "react";
import { useCart } from "../components/contexts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  console.log(cartItems);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex flex-row justify-between px-5 sm:px-10 md:px-20 items-center gap-10 top-0 fixed z-50 bg-white">
      <Link to="/">
        <img src={logo} className="w-28" />
      </Link>

      <div className="font-poppins w-max hidden sm:flex flex-row justify-start items-center gap-10 text-sm">
        <Link to="/">HOME</Link>
        <Link to="/orders">MY ORDERS</Link>
        <Link
          to="/cart"
          className="flex flex-row justify-start items-center gap-1"
        >
          <img src={cartIcon} className="w-10" />
          <div>
            <p className="font-medium text-sm">cart</p>
            <p className="text-xs">{cartItems.length} items</p>
          </div>
        </Link>
      </div>

      <div onClick={toggleIsOpen} className={`cursor-pointer block sm:hidden`}>
        <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
        <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
        <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } text-2xl gap-10 bg-white p-10 fixed top-0 ease-in-out transition-transform duration-300 flex flex-col justify-center items-center bottom-0 right-0 left-0`}
      >
        <div
          onClick={toggleIsOpen}
          className={`cursor-pointer block sm: absolute top-8 right-4 ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
          <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
          <div className="my-[6px] w-[25px] h-[2px] bg-gray-500"></div>
        </div>
        <Link onClick={toggleIsOpen} to="/">
          HOME
        </Link>
        <Link onClick={toggleIsOpen} to="/orders">
          MY ORDERS
        </Link>
        <Link onClick={toggleIsOpen} to="/cart">
          CART
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
