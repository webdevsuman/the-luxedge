"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaLinkedinIn } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactBar = () => {
  return (
    <div className="flex justify-between items-center px-40 py-2 bg-[#FEF0D6]">
      <div className="flex gap-2">
        <p className="flex items-center gap-1">
          <span className="text-[#B3843F]">
            <CallIcon />
          </span>
          123-456-789
        </p>
        <p>|</p>
        <p className="flex items-center gap-1">
          <span className="text-[#B3843F]">
            <IoMdMail />
          </span>
          mail@gmail.com
        </p>
        <p>|</p>
        <p className="flex items-center gap-1">
          <span className="text-[#B3843F]">
            <FaLocationDot />
          </span>
          West Bengal, Kolkata - 700103
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-white p-2 rounded-full bg-[#B3843F] flex items-center">
          <FaFacebookF />
        </div>
        <div className="text-[#B3843F] p-2 rounded-full flex items-center">
          <InstagramIcon />
        </div>
        <div className="text-[#B3843F] p-2 rounded-full flex items-center">
          <FaLinkedinIn />
        </div>
        <div className="text-[#B3843F] p-2 rounded-full flex items-center">
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
