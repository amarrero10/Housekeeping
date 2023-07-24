import React from "react";

function About() {
  return (
    <div className="px-4 w-screen md:py-32 md:w-[80%] mx-auto sm:mt-16 mt-[200px]">
      <h2 className="sm:text-4xl text-2xl font-semibold text-center text-slate-800 mb-6">
        Your Trusted Housekeeping Partner
      </h2>
      <p className="max-w-4xl sm:text-xl mx-auto text-center text-slate-600">
        At BRAND, we are dedicated to providing exceptional cleaning services that transform your
        home into a haven of cleanliness and comfort. Our team of skilled and passionate
        professionals takes pride in every detail, ensuring a spotless and organized living space
        for you and your loved ones.
      </p>
      <p className="max-w-4xl sm:text-xl mx-auto mt-6 text-center text-slate-600">
        Whether you own a home, apartment, or rental property, or need post-event cleaning, our
        services are tailored to meet your unique requirements. We take care of every space with the
        same level of attention and dedication, leaving you with an immaculate environment to enjoy.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10">
        <div className="group flex">
          <div className="bg-white p-6 rounded-lg shadow-xl group-hover:bg-indigo-600 flex flex-col justify-between">
            <h3 className="min-[1500px]:text-2xl text-xl font-semibold text-indigo-800 mb-4 group-hover:text-white sm:text-left text-center">
              Personalized Approach
            </h3>
            <p className="text-slate-600 group-hover:text-white text-justify">
              We understand that every home is unique. That's why we tailor our cleaning services to
              match your specific needs and preferences, ensuring a truly personalized experience.
            </p>
          </div>
        </div>

        <div className="group flex">
          <div className="bg-white p-6 rounded-lg shadow-xl group-hover:bg-indigo-600 flex flex-col justify-between">
            <h3 className="min-[1500px]:text-2xl text-xl font-semibold text-indigo-800 mb-4 group-hover:text-white sm:text-left text-center">
              Natural-Based Cleaners
            </h3>
            <p className="text-slate-600 group-hover:text-white text-justify">
              Our commitment to your well-being drives us to use natural-based cleaners, providing
              effective results without harsh chemicals. It's safe for your family and the
              environment.
            </p>
          </div>
        </div>

        <div className="group flex">
          <div className="bg-white p-6 rounded-lg shadow-xl group-hover:bg-indigo-600 flex flex-col justify-between">
            <h3 className="min-[1500px]:text-2xl text-xl font-semibold text-indigo-800 mb-4 group-hover:text-white sm:text-left text-center">
              Customer Satisfaction
            </h3>
            <p className="text-slate-600 group-hover:text-white text-justify">
              Your satisfaction is our top priority. We go above and beyond to exceed your
              expectations, delivering exceptional service that leaves you with a smile on your
              face.
            </p>
          </div>
        </div>

        <div className="group flex">
          <div className="bg-white p-6 rounded-lg shadow-xl group-hover:bg-indigo-600 flex flex-col justify-between">
            <h3 className="min-[1500px]:text-2xl text-xl font-semibold text-indigo-800 mb-4 group-hover:text-white sm:text-left text-center">
              Quality Assurance
            </h3>
            <p className="text-slate-600 group-hover:text-white text-justify">
              We take pride in delivering top-notch cleaning services to our customers. Our
              dedicated team ensures strict quality assurance measures, leaving your home spotless
              and refreshed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
