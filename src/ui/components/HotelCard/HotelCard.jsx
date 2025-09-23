import { Paper } from "@mui/material";
import React from "react";
import styles from "../../styles/HotelCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HotelCard = () => {
  return (
    <Paper
      elevation={5}
      className="flex flex-col w-[350px] p-5 !rounded-2xl !bg-[#FEF0D6] !border-b-[#b3843f]"
    >
      <div
        id="hotelMedia"
        className={`flex justify-between ${styles.hotelMedia} items-start p-5 rounded-2xl mb-5`}
      >
        <div className="flex gap-2 text-white text-sm mt-2">
          <button className={styles.tagButton}>Recommended</button>
          <button className={styles.tagButton}>Featured</button>
        </div>
        <div className="bg-white rounded-full p-2 flex items-center">
          <button className="text-[#b3843f]">
            <FavoriteIcon />
          </button>
        </div>
      </div>
      <div className="text-left">
        <div className="flex items-center gap-1 text-sm text-white">
          <p className={styles.tagButton}>Top Rated</p>
          <p className={styles.tagButton}>Couple Friendly</p>
          <p className={styles.tagButton}>New</p>
        </div>
        <h4 className="font-semibold text-2xl mt-2">The Grand Serene</h4>
        <p className=" text-gray-600">Greater Kolkata Area, 700134</p>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <p className={`${styles.tagButton} text-white`}>4.5 stars</p>
          <p>500 Ratings</p>
          <p>&bull;</p>
          <p>150 Reviews</p>
        </div>
        <p className="text-gray-600 text-xs my-2">
          +Rs.200 taxes &fees per night
        </p>
        <div className="flex items-center flex-wrap text-xs gap-1 text-[#b3843f]">
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Breakfast included
          </p>
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Swimming Pool
          </p>
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Wifi
          </p>
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Spa & Wellness
          </p>
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Pick Up & Drop
          </p>
          <p
            className={`${styles.tagButton} !bg-white border border-[#b3843f]`}
          >
            Fitness Hub
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center my-4">
        <button className="px-4 py-2 bg-[#b3843f] rounded-full text-white">
          View Details
        </button>
        <p className="flex items-center">
          <span className="font-bold">&#8377;1500</span>
          <span className="text-gray-500 text-xs">/Night</span>
        </p>
      </div>
    </Paper>
  );
};

export default HotelCard;
