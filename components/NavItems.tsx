import { navItems } from "@/constants";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io"; // Arrow icon
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavItems = () => {
  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <div key={item.href} className="relative">
          {/* Main Link with Dropdown Trigger */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link
                href={item.href}
                className="flex items-center text-white font-semibold text-lg lg:text-xl transition-colors"
              >
                {item.text}
                {/* Show arrow if there are subItems */}
                {item.subItems && (
                  <IoIosArrowDown className="ml-2 text-white transition-transform transform group-hover:rotate-180" />
                )}
              </Link>
            </DropdownMenuTrigger>

            {/* Dropdown Menu Content for Sub-items */}
            {item.subItems && (
              <DropdownMenuContent className="bg-white text-[#bf677d] rounded-lg w-max mt-2 p-2">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem
                    key={subItem.href}
                    className="py-2 px-4 text-base lg:text-lg hover:bg-[#bf677d] font-medium rounded-lg transition-colors"
                  >
                    <Link href={subItem.href} className="w-full block">
                      {subItem.text}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
