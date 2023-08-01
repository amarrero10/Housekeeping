import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import logo from "../assets/jose-logo-trans.png";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
            <img src={logo} className=" sm:h-24 h-24 -ml-3 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex text-xl">
            <li className=" cursor-pointer">
              <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>
                Pricing
              </Link>
            </li>
            <li className=" cursor-pointer">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
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
        className={`md:hidden absolute  w-full px-8 ${
          isOpen === false ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        } text-center text-xl transition-all duration-500 ease-in-out overflow-hidden bg-zinc`}
      >
        <li className="border-b-2 border-slate w-full">Home</li>
        <li className="border-b-2 border-slate w-full">About</li>
        <li className="border-b-2 border-slate w-full">Contact</li>
        <li className="border-b-2 border-slate w-full">Pricing</li>
        <li className="border-b-2 border-slate w-full">Services</li>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
          <button className="px-8 py-3 my-5 ">Contact Us!</button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
