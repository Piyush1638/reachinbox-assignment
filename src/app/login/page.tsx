"use client";
import LoginNavbar from "@/components/LoginNavbar";
import Image from "next/image";
import React from "react";

const page = () => {
  const handleLogin = () => {
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${process.env.NEXT_PUBLIC_REDIRECT_URL}`;
  };
  return (
    <main className="bg-black flex min-h-screen w-full flex-col items-center ">
      <LoginNavbar />
      <section className="w-full flex items-center justify-center px-[29px] py-16 min-h-[41.438rem]">
        <div className="flex flex-col pt-6 px-10 pb-10 border border-[#343A40] rounded-2xl gap-12 bg-gradient-to-r from-[#111214] to-[#121212]">
          <h3 className="text-white text-center text-xl font-semibold">
            Create a new account
          </h3>

          <button
            onClick={handleLogin}
            className="flex items-center justify-center gap-4 h-12 w-96 border border-[#707172] rounded-md px-4 py-2 text-white"
          >
            <Image src={"/Login/Google.svg"} alt="" height={21} width={16} />{" "}
            Sign Up with Google
          </button>
          <button className="text-sm font-semibold text-white bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-9 py-3 rounded-[4px] gap-2.5 w-fit mx-auto">
            Create an Account
          </button>
          <p className="text-[#909296] text-center">
            Already have an acconunt?{" "}
            <span className="text-[#C1C2C5] cursor-pointer">Sign In</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
