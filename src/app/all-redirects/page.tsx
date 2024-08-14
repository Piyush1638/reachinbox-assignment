import Sidebar from "@/components/Sidebar";
import LoggedInNavbar from "@/components/LoggedInNavbar";
import Image from "next/image";

export default function AllRedirects() {
  return (
    <main className="min-h-screen dark:bg-black bg-[#f4f6f8] flex">
      <Sidebar />
      <div className="w-full overflow-y-hidden">
        <LoggedInNavbar />
        <section className="w-[96%] flex items-center justify-center h-full relative top-[64px] ml-[56px] ">
          <div className="flex items-center flex-col justify-center gap-4">
            <Image
              src={"/google-login/blank-page/blank.svg"}
              alt=""
              height={229.4}
              width={280}
            />
            <div className="text-center flex flex-col gap-8 ">
              <h3 className="dark:text-white text-black font-bold text-2xl leading-9">
                It&apos;s the beginning of a legendary sales pipeline{" "}
              </h3>
              <p className="w-1/2 mx-auto dark:text-[#9E9E9E] text-gray-500">
                When you have inbound E-mails you&apos;ll see them here
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
