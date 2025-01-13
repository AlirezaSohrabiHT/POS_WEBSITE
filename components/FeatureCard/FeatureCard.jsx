"use client";

import React from "react";

const FeatureCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div
      style={{ direction: "rtl" }}
      className="w-full max-w-sm bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-lg shadow-md overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base leading-6">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
