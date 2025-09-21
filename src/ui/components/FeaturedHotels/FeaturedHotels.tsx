"use client";
import React from "react";
import styles from "../../styles/FeaturedHotels.module.css";
import LocationTabs from "./LocationTabs";

const FeaturedHotels = () => {
  return (
    <div className="text-center my-10 px-20">
      <h2 className="capitalize text-3xl font-medium text-[#341D14]">
        Discover{" "}
        <span className={`${styles.playfair} italic font-semibold`}>
          Handpicked Hotels
        </span>{" "}
        for your <br /> ultimate{" "}
        <span className={`${styles.playfair} italic font-semibold`}>
          comfort and relaxation
        </span>
      </h2>
      <div>
        <LocationTabs />
      </div>
    </div>
  );
};

export default FeaturedHotels;
