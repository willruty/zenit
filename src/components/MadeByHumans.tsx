
import React from "react";
const MadeByHumans = () => {
  return <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
            <div className="flex items-center text-white">
              <img src="/logo.svg" alt="Pulse Robot Logo" className="h-5 sm:h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium">
            </span>
            </div>
            
            <div style={{
            overflow: "hidden",
            maxHeight: "80px",
            marginTop: "10px"
          }}>
              <h2 style={{
              marginBottom: "0px",
              padding: "0px 0px 80px"
            }} className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl">
                Made By AI & Human
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
