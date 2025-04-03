import React from 'react'
import Logo from '../assets/TheFirm.png'
import { NavLink } from 'react-router-dom'
import Button from './Button';
const NavBar = () => {
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
     }
   ];
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div>
          <picture>
            <img src={Logo} alt={Logo} />
          </picture>
        </div>
        <div className="flex items-center gap-[50px]">
          <ul className="flex gap-[43px]">
            {MenuItem.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className="font-bold text-[18px] font-nunito menuitem"
                  >
                    {item.item}{" "}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Button
            buttonClass={
              "font-nunito text-[18px] text-white font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-yellow rounded"
            }
            ButtonText={"Get In Touch"}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar