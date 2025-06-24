import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ to = "/", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `h-full px-4 flex items-center font-semibold border-b-2 transition-all ${
          isActive
            ? "text-c-primary border-c-primary"
            : "border-transparent hover:border-c-primary"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavBtn;
