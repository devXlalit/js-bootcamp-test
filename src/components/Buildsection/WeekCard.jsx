import React from "react";

const WeekCard = ({ week, topic, list1, list2 }) => {
  return (
    <div className="shadow-indigo-300 shadow-md rounded-lg hover:border-b-2 hover:bg-none hover:scale-105 duration-300 bg-gradient-to-r from-[#9DC6F9] to-[#9A7FF7] px-12 py-6 text-white w-72 ">
      <h3 className="text-center text-3xl font-bold leading-7 pb-2">{week}</h3>
      <h5 className="text-center text-lg font-semibold leading-6">{topic}</h5>
      <ul className="pt-6">
        <li className="list-disc font-normal text-lg">{list1}</li>
        <li className="list-disc pt-4  font-normal text-lg">{list2}</li>
      </ul>
    </div>
  );
};

export default WeekCard;
