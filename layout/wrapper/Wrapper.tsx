import React from "react";
import Header from "../header/Header";
import ContactBar from "../header/ContactBar";
import MuiTheme from "@/theme/MuiTheme";
import Footer from "../footer/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MuiTheme>
        <ContactBar />
        <Header />
        {children}
        <Footer />
      </MuiTheme>
    </>
  );
};

export default Wrapper;
