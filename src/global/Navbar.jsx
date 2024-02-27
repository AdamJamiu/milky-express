import { Link } from "react-router-dom";
import logo from "/milky-logo.png";
import cartIcon from "/cart-icon.png";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between px-5 sm:px-10 md:px-20 items-center gap-10 top-0 fixed z-50 bg-white">
      <img src={logo} className="w-28" />

      <div className="font-poppins w-max flex flex-row justify-start items-center gap-7 text-sm">
        <Link to="/">HOME</Link>
        <Link to="/orders">MY ORDERS</Link>
        <Link
          to="/cart"
          className="flex flex-row justify-start items-center gap-1"
        >
          <img src={cartIcon} className="w-10" />
          <div>
            <p className="font-medium text-sm">cart</p>
            <p className="text-xs">3 items</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
