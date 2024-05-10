import React from "react";
import { FaCheck } from "react-icons/fa6";
const ReconmendationCard = ({ title, height }) => {
  return (
    <div className="flex items-center justify-center font-semibold">
      <div
        className={`text-xs md:text-lg bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] p-3 md:p-4 rounded-s-lg`}
      >
        <FaCheck style={{ color: "white" }} />
      </div>
      <div className="text-xs md:text-lg bg-white p-2 md:p-3 rounded-e-lg w-60 md:w-auto">
        {title}
      </div>
    </div>
  );
};

export default ReconmendationCard;
