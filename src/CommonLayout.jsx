import React from "react";

import { Outlet } from "react-router-dom";
import Fotter from "./PageEliment/Fotter";
import NavBar from "./PageEliment/NavBar.Jsx";



const CommonLayout = () => {
  return (
    <>
<NavBar/>
      <Outlet />
      <Fotter />
    </>
  );
};

export default CommonLayout;
