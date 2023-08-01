import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
function Pricing() {
  return (
    <div className=" w-screen px-2 mt-5 " id="pricing">
      <div className="text-center ">
        <h2 className="text-2xl my-3 text-slate-800 font-bold">Transparent Pricing Plans</h2>
        <p className="text-slate-700">
          At Pristine Home Cleaning, we believe in offering honest and transparent pricing for our
          cleaning services. Our pricing plans are designed to be affordable and cater to your
          specific needs. With no hidden fees, you can trust us to deliver exceptional service at a
          fair price.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:max-w-[1240px] mx-auto my-3 ">
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between mt-2 sm:mt-0 sm:max-h-[450px] sm:overflow-auto sm:relative">
          <p className="text-center text-xl font-bold text-green">Basic Cleaning</p>
          <p className="text-center">
            <span className=" font-bold text-xl text-center">$200</span>/hr
          </p>
          <p className=" text-center">Services Include:</p>
          <ul className="">
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Dusting and wiping down furniture and surfaces.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Vacuuming and mopping floors.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Cleaning mirrors and glass surfaces.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Emptying trash bins and replacing liners.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Wiping down kitchen countertops and appliances.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Cleaning and sanitizing bathroom fixtures.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Tidying up common areas.</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Removing visible cobwebs.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Spot cleaning walls and light switches.</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between sm:mt-0 sm:max-h-[450px] sm:overflow-auto sm:relative">
          <p className="text-center font-bold text-xl text-green">Deep Cleaning</p>
          <p className=" text-center">
            <span className=" font-bold text-xl">$250</span>/hr
          </p>
          <p className=" text-center">All services included in Basic Cleaning, plus:</p>
          <ul>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8  text-green" />
              <span className="ml-2">
                Cleaning and sanitizing hard-to-reach areas and high-touch surfaces.
              </span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8  text-green" />
              <span className="ml-2">Washing interior windows and window sills.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8  text-green" />
              <span className="ml-2">Dusting and cleaning ceiling fans and light fixtures.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Cleaning inside and outside of kitchen appliances.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8  text-green" />
              <span className="ml-2">Scrubbing and disinfecting bathroom tiles and grout.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Deep cleaning baseboards and molding.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Thoroughly cleaning hard-to-reach areas under furniture.</span>
            </li>
            <li className="flex">
              <CheckIcon className="absolute -ml-6 h-8  text-green" />
              <span className="ml-2">
                Additional attention to neglected or rarely cleaned areas.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between sm:mt-0 sm:max-h-[450px] sm:overflow-auto sm:relative">
          <p className="text-center text-xl font-bold text-green">A La Carte Services</p>
          <p className="text-center">
            starting at <span className=" font-bold text-xl">$200</span>/hr
          </p>
          <ul>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />{" "}
              <span className="ml-2">Pre/Post Event Cleaning</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Special Occasion Cleaning</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">One-time Kitchen and Appliance Cleaning</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Move-in/Move-out Cleaning</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">Property Managment Services</span>
            </li>
            <li className="flex">
              <CheckIcon className=" absolute -ml-6 h-8 text-green" />
              <span className="ml-2">...and more!</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
