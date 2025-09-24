"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";
import Image from "next/image";
import HotelSearchBar from "../HotelSearchBar/HotelSearchBar";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div
      id="hero"
      className={`${styles.background} flex flex-col items-center justify-center`}
    >
      <div className="text-center text-white flex flex-col items-center">
        <div className="my-2">
          <Image src="/luxury_tag.png" height={50} width={150} alt="tag" />
        </div>
        <h2 className="font-extralight text-xl">EVERLASTING LUXURY MOMENTS</h2>
        <h1 className="my-3 text-5xl font-semibold">
          Affordable{" "}
          <span className={`text-[#F4831B] italic ${styles.playfair} `}>
            luxury
          </span>{" "}
          With <br /> Premium{" "}
          <span className={`text-[#F4831B] italic ${styles.playfair} `}>
            comfort
          </span>
        </h1>
        <p>
          Indulge in unforgettable journeys with carefully curated stays
          designed for ultimate relaxation, modern <br /> convenience, and
          timeless luxury, ensuring every moment of your travel is
          extraordinary.
        </p>
        <div className="flex gap-5 my-5">
          <Button
            variant="contained"
            className="!px-4 !py-2 !text-lg !bg-white/20 !rounded-full !capitalize"
          >
            Discover More
          </Button>
          <Button
            variant="contained"
            className="!px-4 !py-2 !text-lg bg-[#B3843F] text-white !rounded-full !capitalize"
          >
            Browse Hotels
          </Button>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0px", maxHeight: "1px" }}>
        <HotelSearchBar />
      </div>
    </div>
  );
};

export default Hero;
