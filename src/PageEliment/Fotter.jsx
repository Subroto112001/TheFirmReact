import React from 'react'
import Logo from "../assets/TheFirm.png"
import { NavLink } from 'react-router-dom';
const Fotter = () => {
  const MenuItem = [
    {
      id: 1,
      item: "Home",
      path: "/",
    },
    {
      id: 2,
      item: "Solutions",
      path: "/solutions",
    },
    {
      id: 3,
      item: "Cases",
      path: "/cases",
    },

    {
      id: 4,
      item: "About Us",
      path: "/aboutus",
    },
    {
      id: 5,

      item: "Blog",
      path: "/blog",
    },
    {
      id: 6,
      item: "Contact Us",
      path: "/contactus",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <picture>
          <img src={Logo} alt={Logo} />
        </picture>

        <div className="flex items-center gap-[50px]">
          <ul className="flex gap-[43px]">
            {MenuItem.map((item) => {
              return (
                <li
                  key={item.id}
                  className="font-bold text-[18px] font-nunito menuitem"
                >
                  <NavLink to={item.path}>{item.item}</NavLink>
                </li>
              );
            })}
          </ul>
        
        </div>
      </div>
    </>
  );
}

export default Fotter