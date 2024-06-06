import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-8 mx-auto">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h3 className="text-4xl font-bold text-[#ff7703]">{subTitle}</h3>
      <div className="w-20 h-1 mx-auto bg-[#ff7703] mt-2"></div>
    </div>
  );
};

export default SectionTitle;
