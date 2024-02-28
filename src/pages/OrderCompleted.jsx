import logo from "/milky-logo.png";
import check from "/check.svg";
import product4 from "/product-4.png";
import product5 from "/product-5.png";
import product6 from "/product-6.png";

const OrderCompleted = () => {
  return (
    <div className="font-poppins w-full flex flex-col justify-center items-center px-4 sm:p-10">
      <div className="w-full rounded-xl bg-[#F9F9F9] p-5 sm:p-10 max-w-3xl">
        <div className="p-3 rounded-full self-center mx-auto mb-2 bg-white w-fit">
          <img src={logo} className="" />
        </div>
        <p className="font-bold w-full text-center text-lg">Order #201</p>
        <div className="w-full flex flex-row justify-center items-center gap-4 mt-3">
          <div className="w-max flex flex-row justify-start items-center gap-3">
            <p className="font-medium">Status:</p>
            <div className="flex flex-row items-center gap-1">
              <img src={check} />
              <p className="text-[#AAAAAA]">Paid</p>
            </div>

            <p>
              Date: <span className="text-[#AAAAAA]">1-02-2021</span>
            </p>
          </div>
        </div>

        <div className="mt-7 py-3 px-7 text-lg font-medium rounded-xl w-full text-white bg-[#FF1A71]">
          Order Summary
        </div>

        <div className="w-full flex flex-row justify-center sm:justify-between items-center gap-5 flex-wrap">
          <div className="w-max flex flex-row justify-center sm:justify-start flex-wrap items-center gap-7 mt-7">
            <img src={product4} className="rounded-xl w-24" />
            <p className="text-sm font-semibold w-max">
              Milky Lactation Cookies
            </p>
          </div>
          <p className="text-sm font-semibold">N4, 500</p>
        </div>

        <div className="w-full flex flex-row justify-center sm:justify-between items-center gap-5 flex-wrap">
          <div className="w-max flex flex-row justify-center sm:justify-start flex-wrap items-center gap-7 mt-7">
            <img src={product5} className="rounded-xl w-24" />
            <p className="text-sm font-semibold w-max">Milky Enrich Shakes</p>
          </div>
          <p className="text-sm font-semibold">N4, 500</p>
        </div>

        <div className="w-full flex flex-row justify-center sm:justify-between items-center gap-5 flex-wrap">
          <div className="w-max flex flex-row justify-center sm:justify-start flex-wrap items-center gap-7 mt-7">
            <img src={product6} className="rounded-xl w-24" />
            <p className="text-sm font-semibold w-max">Milky Enrich Shakes</p>
          </div>
          <p className="text-sm font-semibold">N4, 500</p>
        </div>

        <div className="mt-10 w-full flex flex-row justify-between items-center gap-4">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">N14,000</p>
        </div>

        <div className="mt-1 w-full flex flex-row justify-between items-center gap-4">
          <p className="font-semibold">Shipping</p>
          <p className="font-semibold">N1,500</p>
        </div>

        <div className="mt-1 w-full flex flex-row justify-between items-center gap-4">
          <p className="font-semibold">Discount</p>
          <p className="font-semibold">-N500</p>
        </div>

        <div className="mt-1 w-full text-2xl flex flex-row justify-between items-center gap-4">
          <p className="font-bold">Total</p>
          <p className="font-bold">-N500</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
