import React, { useState } from "react";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className=" text-3xl font-bold mr-4 sm:text-4xl">LOGO.</h1>
        </div>
        <div>
          <ul className="hidden md:flex text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className=" px-8 py-3">Contact Us!</button>
        </div>
        <div className=" md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {/* Hamburger Menu Items */}
      <ul
        className={`md:hidden absolute bg-zinc-200 w-full px-8 ${
          isOpen === false ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        } text-center text-xl transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Contact</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        <li className="border-b-2 border-zinc-300 w-full">Services</li>
        <div>
          <button className="px-8 py-3 my-5 ">Contact Us!</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
