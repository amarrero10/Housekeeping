import React from "react";
import heroImage from "../assets/pexels-cottonbro-studio-4107120.jpg";
import { CheckIcon } from "@heroicons/react/outline";

function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Enjoy a Clean and Relaxing Home</p>

          <h1 className=" py-3 text-5xl md:text-7xl font-bold">This is OUR BRAND</h1>
          <p>Experience the Difference of a Spotless Space and More Free Time</p>
          <button className=" py-3 px-6 sm:w-[60%] mt-3">Contact Us</button>
          <button className=" py-3 px-6 sm:w-[60%] mt-3">See Pricing</button>
        </div>
        <div>
          <img
            className="w-full h-[600px] object-cover rounded-md"
            src={heroImage}
            alt="Main Page"
          />
        </div>
        <div className="absolute flex flex-col items-center py-8 lg:min-w-[1200px] md:min-w-[790px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 md:translate-y-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-4">
            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Eco-Friendly: Clean with care for
              your home and the planet.
            </p>

            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Affordable: Quality service at
              budget-friendly rates.
            </p>

            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Natural-Based Cleaners: Safe
              solutions for a healthier home.
            </p>

            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Expert Staff: Skilled cleaners with
              keen attention to detail.
            </p>

            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Flexible Plans: Customized services
              to suit your schedule.
            </p>
            <p className="flex px-4 py-2 text-slate-600 font-semibold">
              <CheckIcon className="h-6 w-6 text-indigo-600" /> Satisfaction Guaranteed: Your
              happiness is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
