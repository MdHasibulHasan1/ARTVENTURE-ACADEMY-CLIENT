import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-8">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h3 className="text-4xl font-bold text-yellow-500">{subTitle}</h3>
      <div className="w-20 h-1 mx-auto bg-yellow-500 mt-2"></div>
    </div>
  );
};

export default SectionTitle;
