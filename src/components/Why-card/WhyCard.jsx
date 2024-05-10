import React from "react";

const WhyCard = () => {
  return (
    <div className="pt-12 flex justify-center flex-wrap gap-20">
      <div className="hover:scale-105 duration-300 text-white w-80 border-2 border-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] py-5 px-6 rounded-lg">
        <h1 className="text-2xl text-center font-semibold">
          Why JavaScript and React.js Matter in 2024
        </h1>
        <ul className="list-disc pt-6 px-4">
          <li className="">
            {" "}
            JavaScript remains essential for web development, powering modern
            websites and applications.
          </li>
          <li className="">
            React.js continues to be in high demand, offering efficiency and
            scalability for building user interfaces..
          </li>
          <li className="">
            Mastery of JavaScript and React.js is crucial for job opportunities
            in 2024's competitive tech industry
          </li>
        </ul>
      </div>

      <div className="hover:scale-105 duration-300 text-white w-80 border-2 border-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] py-5 px-6 rounded-lg">
        <h1 className="text-2xl text-center font-semibold">
          How This Bootcamp Prepares You for Job & Internship
        </h1>
        <ul className="list-disc pt-6 px-4">
          <li className="">
            Our intensive 6-week program ensures you gain essential skills in
            JavaScript and React.js.
          </li>
          <li className="">
            Hands-on projects provide practical experience to showcase to
            potential employers.
          </li>
          <li className="">
            Interview preparation and placement assistance guarantee readiness
            for job opportunities in web development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyCard;
