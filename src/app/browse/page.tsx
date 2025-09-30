"use client";
import React from "react";
import stylesFont from "@/ui/styles/fonts.module.css";
import styles from "@/ui/styles/BrowseHotels.module.css";
import HotelSearchBar from "@/ui/components/HotelSearchBar/HotelSearchBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterHotels from "@/ui/components/BrowseHotels/FilterHotels";

const BrowseHotels = () => {
  // Dropdown button
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <div className={`flex flex-col py-20 px-80 ${styles.background}`}>
        <h2
          className={`${stylesFont.dmsans} font-bold text-4xl text-white mb-5`}
        >
          Where is your Next{" "}
          <span className={`${stylesFont.playfair} text-[#F4831B] italic`}>
            Dream Place
          </span>
          ?
        </h2>
        <p className="text-[#B3843F]">
          Book Domestic and International Property Online
        </p>
        <HotelSearchBar />
        <div className="grid grid-cols-5 py-10">
          <div className=" col-span-1">Map</div>
          <div className=" col-span-4">
            {/* Dropdown button  */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  className="!text-[#E66810]"
                  id="demo-simple-select-label"
                >
                  Sort by:
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className="!text-white"
                >
                  <MenuItem value={10}>Out top Picks For Families</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div>
              <p className="text-[#E66810] text-xl font-bold">Goa</p>
              <p className="text-white">130 properties found</p>
            </div>
            <p className="text-white">
              Travel professionals dedicated to simplifying your travel
              experience by curating flight and accommodation services on a
              user-friendly platform. Committed to quality and assurance.{" "}
              <span className="text-[#B3843F]">Find More Here ...</span>
            </p>
          </div>
        </div>
      </div>
      <FilterHotels />
    </>
  );
};

export default BrowseHotels;
