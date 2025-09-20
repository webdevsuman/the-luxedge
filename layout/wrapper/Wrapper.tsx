import React from "react";
import Header from "../header/Header"
import ContactBar from "../header/ContactBar";


const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <><ContactBar />
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
