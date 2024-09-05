import React from "react";
import ReconmendationCard from "./ReconmendationCard";

const Reconmedation = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl  text-center text-white pt-12 font-bold">
        This Bootcamp is for you! if you are
      </h1>
      <div className="flex flex-wrap gap-4 pt-12">
        <ReconmendationCard title="Aspiring JS & React Developers" />
        <ReconmendationCard title="Knowlegde of HTML & CSS" />
        <ReconmendationCard title="Web Development Aspirants" />
        <ReconmendationCard title="Front-End Developer" />
        <ReconmendationCard title="College Students" />
        <ReconmendationCard title="Recent Graduates" />
        <ReconmendationCard title="IT Professionals looking for Salary Hike & Skill Boost" />
        <ReconmendationCard title="Non-Technical to Technical Career Transition" />
      </div>
      <div className=" text-center relative justify-center">
        {/* <button
          onClick={() => {
            window.open("https://forms.gle/yzqKFUsohCRCVtw1A");
          }}
          className="animate__animated animate__bounceIn animate__slower animate__infinite shadow-indigo-300 shadow-sm hover:scale-105 rounded-lg font-semibold text-xl md:text-xl text-zinc-200  hover:text-zinc-100 duration-300 mt-12 py-4 px-20 md:py-4 md:px-96 bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] hover:bg-gradient-to-r hover:from-[#9A7FF7] hover:to-[#9DC6F9] "
        >
          Apply Now! 😍
        </button> */}
        <button
          onClick={() => {
            window.open("https://pages.razorpay.com/pl_OsZe4gyLy3uhqO/view");
          }}
          className="animate__animated duration-300 animate__bounceIn animate__slower	3s animate__infinite shadow-indigo-300 shadow-sm hover:scale-105 rounded-lg font-semibold text-lg md:text-xl text-zinc-200  hover:text-zinc-100 duration-300 mt-12 py-4 px-10 md:py-4 md:px-96  bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] hover:bg-gradient-to-r hover:from-[#9A7FF7] hover:to-[#9DC6F9] "
        >
          Pre-Register Now Just for <s className="text-red">₹250</s> ₹99 😍
        </button>
      </div>
    </div>
  );
};

export default Reconmedation;
