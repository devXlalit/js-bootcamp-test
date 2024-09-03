import React from "react";

const CertificateSection = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-white font-semibold text-center pt-12">
        Get ISO Certified Certificate
      </h1>
      <p className="text-center text-lg text-white pt-3">
        By Instructor Lalit Pagare, After Attending The 120-Days Bootcamp
      </p>
      <div className="pt-12 flex flex-wrap justify-center gap-28 items-center">
        <img
          className="certificate w-96 border-4"
          src="549ff56c34fbfe2c00cdb4d353545bed.png"
        />

        <div className="points">
          <div className="flex pt-4">
            <div className="h-16 md:h-10 rounded-s-lg w-2 bg-indigo-400"></div>
            <div className=" rounded-e-lg p-2 md:w-96 w-64 text-black font-semibold bg-zinc-100">
              Become a Certified Frontend Developer
            </div>
          </div>
          <div className="flex pt-4">
            <div className="h-10 rounded-s-lg w-2 bg-indigo-400"></div>
            <div className=" rounded-e-lg p-2 md:w-96 w-64  text-black font-semibold bg-zinc-100">
              Include In Your Resume
            </div>
          </div>

          <div className="flex pt-4">
            <div className="h-10 rounded-s-lg w-2 bg-indigo-400"></div>
            <div className=" rounded-e-lg p-2 md:w-96 w-64 text-black font-semibold bg-zinc-100">
              Standout From Others
            </div>
          </div>
          <div className="flex pt-4">
            <div className="h-10 rounded-s-lg w-2 bg-indigo-400"></div>
            <div className=" rounded-e-lg p-2 md:w-96 w-64 text-black font-semibold bg-zinc-100">
              Enhance Your Crediblity
            </div>
          </div>
        </div>
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
          className="animate__animated animate__bounceIn animate__slower	3s animate__infinite shadow-indigo-300 shadow-sm hover:scale-105 rounded-lg font-semibold text-lg md:text-xl text-zinc-200  hover:text-zinc-100 duration-300 mt-12 py-4 px-10 md:py-4 md:px-96  bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] hover:bg-gradient-to-r hover:from-[#9A7FF7] hover:to-[#9DC6F9] "
        >
          Register Now Just for <s className="text-red">₹250</s> ₹99 😍
        </button>
      </div>
    </div>
  );
};

export default CertificateSection;
