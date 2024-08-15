"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="h-6 w-[3.2rem] border dark:bg-[#222426] bg-[#DADEE1] dark:border-[#343A40] border-[#DADEE1] rounded-full flex items-center justify-between py-1 px-[5px] gap-2 cursor-pointer transition-all ease-in-out duration-1000"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <>
          <div className="h-4 w-4 rounded-full dark:bg-[#888686]" />
          <Image
            src={"/google-login/LoggedInNavbar/sun.svg"}
            alt="Sun Icon"
            height={16}
            width={16}
          />
        </>
      ) : (
        <>
          <Image
            src={"/google-login/LoggedInNavbar/moon.svg"}
            alt="Moon Icon"
            height={16}
            width={16}
          />
          <div className="h-4 w-4 rounded-full dark:bg-[#343A40] bg-white" />
        </>
      )}
    </div>
  );
};

export default ThemeToggler;
