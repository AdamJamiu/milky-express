import logo from "/milky-logo.png";
import check from "/check.svg";
import printer from "/printer.svg";
import arrowRight from "/arrow-right.svg";
import { useState } from "react";
import { orders } from "../data/orders";

const Orders = () => {
  const [activeOrders, setActiveOrder] = useState(orders[0]?.data);

  const handleSetActiveOrder = (id) => {
    setActiveOrder(orders[id]?.data);
    console.log(activeOrders);
  };

  return (
    <div className="font-poppins w-full p-4 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-0">
      <div className="w-full bg-white lg:pr-10">
        <h1 className="text-2xl font-semibold mb-2">My Orders</h1>
        <p className="text-[#949494] font-medium text-sm">
          Input your email to view your order history
        </p>

        <div className="space-y-3 mt-10">
          {orders.map((item, index) =>
            item?.data?.map((itm, idx) => (
              <div
                onClick={() => handleSetActiveOrder(index)}
                key={idx}
                className={`${
                  itm.id === activeOrders[idx]?.data?.id
                    ? "border-[#FF1A71]"
                    : "border-transparent"
                } rounded-3xl py-1 pl-2 border flex flex-row justify-between items-center gap-7 cursor-pointer`}
              >
                <div className="w-full flex items-center justify-start gap-1">
                  <img src={itm.image} className="w-24" />
                  <div className="">
                    <p className="font-medium">{itm.name}</p>
                    <p className="text-sm text-[#9A9A9A] break-words">
                      {itm.description}
                    </p>
                  </div>
                </div>
                <div className="pr-10 sm:block hidden">
                  <img src={arrowRight} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full rounded-2xl bg-[#F9F9F9] p-5">
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

        <div className="mt-7 py-3 px-7  font-medium rounded-xl w-full text-white bg-[#FF1A71]">
          Order Summary
        </div>
        {activeOrders?.map((item, index) => (
          <div
            key={index}
            className="w-full flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-5 mt-5"
          >
            <div className="w-max flex sm:flex-row flex-col justify-center sm:justify-start flex-wrap items-center gap-7">
              <img src={item.image} className="rounded-xl w-20" />
              <p className="text-sm font-semibold w-max">{item.name}</p>
            </div>
            <p className="text-sm font-semibold self-center">{item?.price}</p>
          </div>
        ))}

        <div className="font-medium mt-7 text-sm w-full flex flex-row justify-between items-center gap-4">
          <p className="">Discount</p>
          <p className="">-N500</p>
        </div>

        <div className="mt-3 w-full text-xl flex flex-row justify-between items-center gap-4">
          <p className="font-bold">Total</p>
          <p className="font-bold">-N500</p>
        </div>

        <div className="mt-10 py-3 px-7  font-medium rounded-xl w-full text-white bg-[#FF1A71]">
          Account Summary
        </div>

        <div className="mt-7 w-full flex flex-row justify-between items-center gap-4 font-medium text-sm">
          <p className="">First Name</p>
          <p className="text-[#8D8D8D]">John</p>
        </div>

        <div className="mt-3 w-full flex flex-row justify-between items-center gap-4 font-medium text-sm">
          <p className="">Last Name</p>
          <p className="text-[#8D8D8D]">Stone</p>
        </div>

        <div className="mt-3 w-full flex flex-row justify-between items-center gap-4 font-medium text-sm">
          <p className="">Email</p>
          <p className="text-[#8D8D8D]">stonejohn@gmail.com</p>
        </div>

        <div className="mt-3 w-full flex flex-row justify-between items-center gap-4 font-medium text-sm">
          <p className="">Phone</p>
          <p className="text-[#8D8D8D]">+2349049337263</p>
        </div>

        <div className="mt-3 w-full flex flex-row justify-between items-center gap-4 font-medium text-sm">
          <p className="">Address</p>
          <p className="text-[#8D8D8D]">
            7 Sdekunle Ajose Street Lekki Lagos Nigeria
          </p>
        </div>

        <div className="w-max flex justify-start items-center gap-2 my-16 text-[#AAAAAA] mx-auto">
          <img src={printer} />
          <p className="font-medium">Print</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
