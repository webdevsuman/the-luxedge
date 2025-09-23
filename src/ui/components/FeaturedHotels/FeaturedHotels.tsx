"use client";
import React from "react";
import styles from "../../styles/FeaturedHotels.module.css";
import LocationTabs from "./LocationTabs";

const FeaturedHotels = () => {
  return (
    <div className="text-center my-10 px-40">
      <h2 className="capitalize text-3xl font-black text-[#341D14] mb-10">
        Discover{" "}
        <span className={`${styles.playfair} italic font-black`}>
          Handpicked Hotels
        </span>{" "}
        for your <br /> ultimate{" "}
        <span className={`${styles.playfair} italic font-black`}>
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
