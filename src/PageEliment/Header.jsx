import React from "react";

const Header = ({ StyleName, titlecontent, lastcontent }) => {
  return (
    <>
      <h1 className={StyleName}>
        {titlecontent} <span className="header">{lastcontent}</span>
      </h1>
    </>
  );
};

export default Header;
