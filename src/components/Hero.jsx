import React from "react";
import heroImage from "../assets/pexels-cottonbro-studio-4107120.jpg";
import { CheckIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <div className="w-full h-screen  flex flex-col justify-between " id="hero">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 mt-10 sm:mt-0">
            <p className="text-2xl">Enjoy a Clean and Relaxing Home</p>
            <h1 className=" py-3 text-5xl md:text-7xl ">
              This is <span className="text-light-blue font-bold"> Pristine Home Cleaning</span>
            </h1>
            <p>Experience the Difference of a Spotless Space and More Free Time</p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className=" w-full"
            >
              <button className=" py-3 px-6 w-[50%] mt-3 sm:self-start self-center">
                Contact Us
              </button>
            </Link>

            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className=" w-full"
            >
              <button className=" py-3 px-6 w-[50%] mt-3 sm:self-start self-center">
                See Pricing
              </button>
            </Link>
          </div>
          <div>
            <img
              className="w-full h-[600px] object-cover rounded-md"
              src={heroImage}
              alt="Main Page"
            />
          </div>
          <div className=" absolute md:flex flex-col items-center py-8 lg:min-w-[1100px] md:min-w-[790px] sm:max-w-[600px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-3/4  border border-slate rounded-xl text-center shadow-xl translate-y-[500px] hidden">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-4">
              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Eco-Friendly: Clean with care for your
                home and the planet.
              </p>

              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Affordable: Quality service at
                budget-friendly rates.
              </p>

              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Natural-Based Cleaners: Safe solutions
                for a healthier home.
              </p>

              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Expert Staff: Skilled cleaners with
                keen attention to detail.
              </p>

              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Flexible Plans: Customized services to
                suit your schedule.
              </p>
              <p className="flex px-4 py-2 text-slate-600 font-semibold">
                <CheckIcon className="h-6 w-6 text-green" /> Satisfaction Guaranteed: Your happiness
                is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
