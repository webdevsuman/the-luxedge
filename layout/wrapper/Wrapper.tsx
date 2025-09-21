import React from "react";
import Header from "../header/Header";
import ContactBar from "../header/ContactBar";
import MuiTheme from "@/theme/MuiTheme";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MuiTheme>
        <ContactBar />
        <Header />
        {children}
      </MuiTheme>
    </>
  );
};

export default Wrapper;
