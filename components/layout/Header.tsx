import Image from "next/image";
import React from "react";
import NavItems from "../NavItems";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { navItems } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#bf677d]">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="w-20 lg:w-[120px] h-20 lg:h-[120px] rounded-full border-2 border-[#bf677d] bg-white flex items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/chemielea.jpg"
              alt="photo"
              width={112}
              height={112}
              className="w-[72px] lg:w-[112px] h-[72px] lg:h-[112px] rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 relative">
          <NavItems />
        </ul>

        {/* Mobile Navigation (Hamburger) */}
        <nav className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-white text-[25px]">
                <GiHamburgerMenu size={25} />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-[#bf677d] border-[#bf677d] text-white">
              <SheetTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <ul className="flex flex-col gap-6 relative top-16 w-full items-center justify-center">
                {navItems.map((item) => (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className="text-white font-semibold text-2xl"
                    >
                      {item.text}
                    </Link>
                    {/* Sub-items for Mobile */}
                    {item.subItems && (
                      <div className="absolute left-0 hidden group-hover:block bg-gray-800 text-white mt-2 p-2 rounded-lg">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-1 px-4 text-base hover:bg-gray-600 rounded"
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>

        {/* Contact Button (Desktop Only) */}
        <Link href="/contact">
          <Button
            type="button"
            className="text-white bg-[#bf677d] hover:bg-[#a85469] transition-colors duration-200 ease-in-out shadow-lg border-2 border-white text-xl py-6 lg:py-8 px-8 lg:px-10 rounded-lg cursor-pointer hidden md:flex"
          >
            Contact
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
