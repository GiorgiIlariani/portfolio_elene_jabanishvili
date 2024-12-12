import { NavbarConsts } from "@/constants";
import React from "react";
import { Link } from "react-scroll";

const NavItems = () => {
  return (
    <>
      {NavbarConsts.map((item) => (
        <li
          className="flex flex-row md:flex-col md:py-6 text-[22px] md:text-3xl list-none px-4 cursor-pointer"
          key={item.id}
        >
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            className="text-[#000000] hover:text-[#bf677d] transition duration-150"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavItems;
