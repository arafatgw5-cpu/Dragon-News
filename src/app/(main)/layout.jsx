// import BreakingNews from "@/components/shared/BreakingNews";
import BrakingNews from "@/components/shared/BrakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
// import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
     <div> <BrakingNews /></div>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
