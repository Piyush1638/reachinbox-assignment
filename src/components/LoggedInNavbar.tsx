import Image from "next/image";
import React from "react";
import ThemeToggler from "./ThemeToggler";

const LoggedInNavbar = () => {
  return (
    <nav className="dark:bg-[#1F1F1F] bg-[#ffffff] w-[98%] border-b dark:border-[#343A40] border-[#D8D8D8] h-16 p-6 fixed left-14 flex items-center justify-between gap-6 z-10 top-0">
      <h3 className="font-bold dark:text-white text-[#5B5F66]">Onebox</h3>
      <div className="flex items-center justify-center gap-5">
        <ThemeToggler />
        <div className="flex items-center justify-center p-6 gap-2">
          <h3 className="dark:text-white text-[#454F5B] font-semibold text-sm">
            Tim's Workspace
          </h3>

          <Image
            src={"/google-login/LoggedInNavbar/dropdown.svg"}
            alt=""
            height={16}
            width={16}
          />
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
