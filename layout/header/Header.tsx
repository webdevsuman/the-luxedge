"use client";

import Image from "next/image";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 py-5 flex justify-end pr-5 rounded-br-4xl bg-[#F8A954] bg-gradient-to-r from-[#F8A954] to-[#341D14]">
        <Image src="/brandLogo.png" height={40} width={100} alt="brandlogo" />
      </div>
      <nav className="col-span-4 flex gap-5 pl-5 rounded-tl-4xl items-center">
        <ul className="flex justify-around gap-5 py-5 items-center">
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            Home <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            About <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            Browse Hotels <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            Policies <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            Blogs <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            FAQs <ArrowOutwardIcon fontSize="small" />
          </li>
          <li className="flex items-center rounded-3xl border border-gray-300 px-3 py-2">
            Contact <ArrowOutwardIcon fontSize="small" />
          </li>
        </ul>
        <div className="flex items-center text-orange-600">
          <SearchIcon color="inherit" />
        </div>
        <button className="flex items-center bg-[#B3843F] text-white rounded-full px-5 py-3">
          Login | Register
        </button>
      </nav>
    </div>
  );
};

export default Header;
