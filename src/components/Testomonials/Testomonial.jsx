import React from "react";
import TestomonialCard from "./TestomonialCard";
import TestomonialChat from "./TestomonialChat";

const Testomonial = () => {
  return (
    <div className="pt-12">
      <h1 className="text-3xl md:text-4xl text-white font-bold text-center tracking-wide">
        Our Testomonials
      </h1>
      <div className="flex gap-4 flex-wrap justify-center pt-12">
        <TestomonialCard url="testo_of_students (1).mp4" />
      </div>
      <div className="flex flex-wrap justify-center pt-12 gap-5">
        <TestomonialChat img="WhatsApp Image 2024-05-07 at 15.09.38_ad1bb097.jpg" />
        <TestomonialChat img="WhatsApp Image 2024-05-07 at 15.10.44_b8cb486c.jpg" />
        <TestomonialChat img="WhatsApp Image 2024-05-07 at 15.11.34_2e076d14.jpg" />
      </div>
    </div>
  );
};

export default Testomonial;
