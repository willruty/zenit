
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Transform your digital presence today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our cutting-edge technology harnesses artificial intelligence to build websites that revolutionize the way
            you connect with your customers, delivering innovation, speed, and intelligent design.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png`}
              alt="Advanced humanoid robot with orange and white design"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next-Generation Digital Solutions</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We develop websites with precision, powered by advanced AI to ensure performance, usability,
              and continuous support blending technology, focusing on creativity to drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
