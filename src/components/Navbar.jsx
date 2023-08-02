import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import logo from "../assets/jose-logo-trans.png";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      // Define the offsets for each section (adjust these values as needed).
      const offsets = {
        hero: 100,
        about: 150,
        pricing: 200,
        contact: 300,
      };

      // Find the currently active section based on the scroll position.
      const sections = Object.keys(offsets);
      for (const section of sections) {
        const element = document.getElementById(section);
        const offset = offsets[section];
        if (
          element &&
          window.scrollY >= element.offsetTop - offset &&
          window.scrollY < element.offsetTop + element.offsetHeight - offset
        ) {
          setActiveLink(section);
          break;
        }
      }
    };

    // Attach the scroll event listener when the component mounts.
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
            <img src={logo} alt="brand" className=" sm:h-24 h-24 -ml-3 cursor-pointer" />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex text-xl">
            <li
              className={`cursor-pointer ${activeLink === "hero" ? "border-b-2 border-green" : ""}`}
            >
              <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li
              className={`cursor-pointer ${
                activeLink === "about" ? "border-b-2 border-green" : ""
              }`}
            >
              <Link to="about" spy={true} smooth={true} offset={40} duration={500}>
                About
              </Link>
            </li>
            <li
              className={`cursor-pointer ${
                activeLink === "pricing" ? "border-b-2 border-green" : ""
              }`}
            >
              <Link to="pricing" spy={true} smooth={true} offset={-90} duration={500}>
                Pricing
              </Link>
            </li>
            <li
              className={`cursor-pointer ${
                activeLink === "contact" ? "border-b-2 border-green" : ""
              }`}
            >
              <Link to="contact" spy={true} smooth={true} offset={-190} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-190}
            duration={500}
            className=" w-full"
          >
            <button className=" px-8 py-3">Contact Us!</button>
          </Link>
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
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
          <li
            className="border-b-2 border-slate w-full cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
          <li
            className="border-b-2 border-slate w-full cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            About
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className=" w-full">
          <li
            className="border-b-2 border-slate w-full cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Contact
          </li>
        </Link>
        <Link to="pricing" spy={true} smooth={true} offset={-90} duration={500} className=" w-full">
          <li
            className="border-b-2 border-slate w-full cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          >
            Pricing
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
