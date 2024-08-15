"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleLogin: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      // Store the token in a cookie
      document.cookie = `token=${token}; path=/; max-age=${30 * 24 * 60 * 60}`;
      // Redirect to the home page or any other page
      router.push("/");
    } else {
      console.error("Token not found in the URL");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="h-10 w-10 rounded-full border-b border-purple-600 animate-spin" />
        <h1 className="text-2xl font-semibold text-white">
          Authenticating! Please wait...
        </h1>
      </div>
    </main>
  );
};

export default GoogleLogin;
