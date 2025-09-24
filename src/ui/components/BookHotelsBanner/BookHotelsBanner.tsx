import React from "react";
import styles from "../../styles/BookHotelsBanner.module.css";
import stylesFont from "../../styles/fonts.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const BookHotelsBanner = () => {
  return (
    <div
      className={`${styles.background} flex flex-col items-center justify-center`}
    >
      <div className="text-center text-white flex flex-col items-center">
        <div className="my-2">
          <Image src="/luxury_tag.png" height={50} width={150} alt="tag" />
        </div>
        <h2 className="font-extralight text-xl">YOUR PERFECT STAY AWAITS</h2>
        <h1 className="my-3 text-5xl font-semibold">
          Enjoy{" "}
          <span className={`text-[#F4831B] italic ${stylesFont.playfair} `}>
            Popular Hotels
          </span>{" "}
          Ready <br /> For Your{" "}
          <span className={`text-[#F4831B] italic ${stylesFont.playfair} `}>
            Reservation
          </span>
        </h1>
        <div className="flex gap-5 my-5">
          <Button
            variant="contained"
            className="!px-4 !py-2 bg-[#B3843F] text-white !rounded-full !capitalize"
          >
            Book Your Hotels Now <KeyboardDoubleArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookHotelsBanner;
