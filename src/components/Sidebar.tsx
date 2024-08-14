import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Icon {
  id: number;
  img: string;
  alt: string;
  redirect: string;
  notification?: string;
}

const Sidebar = () => {
  const sidebarIcons: Icon[] = [
    {
      id: 1,
      img: "/google-login/sidebar/home.svg",
      alt: "Home",
      redirect: "/all-redirects",
    },
    {
      id: 2,
      img: "/google-login/sidebar/search.svg",
      alt: "Search",
      redirect: "/all-redirects",
    },
    {
      id: 3,
      img: "/google-login/sidebar/mail.svg",
      alt: "Mail",
      redirect: "/all-redirects",
    },
    {
      id: 4,
      img: "/google-login/sidebar/message.svg",
      alt: "Message",
      redirect: "/all-redirects",
    },
    {
      id: 5,
      img: "/google-login/sidebar/view_list.svg",
      alt: "View List",
      redirect: "/all-redirects",
    },
    {
      id: 6,
      img: "/google-login/sidebar/inbox.svg",
      alt: "Inbox",
      notification: "12+",
      redirect: "/",
    },
    {
      id: 7,
      img: "/google-login/sidebar/statistics.svg",
      alt: "Statistics",
      redirect: "/all-redirects",
    },
  ];

  return (
    <aside className="w-14 min-h-full fixed left-0 bg-[#fafafa]  dark:bg-[#101113] flex flex-col items-center justify-between border-r dark:border-[#343A40] border-[#D8D8D8] px-1">
      <div className="pt-4">
        <Image
          src={"/google-login/sidebar/logo.svg"}
          alt="Logo"
          height={32}
          width={32}
        />
      </div>
      <div className="flex flex-col relative bottom-12 items-center gap-6 py-8 px-2">
        <div className="gap-6 flex flex-col">
          {sidebarIcons.map((icon) => (
            <Link
              href={icon.redirect}
              key={icon.id}
              className="relative flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-[#1F1F1F] rounded-md"
            >
              <Image src={icon.img} alt={icon.alt} height={18} width={18}  />
              {icon.notification && (
                <span className="absolute h-5 w-5 top-0 right-0 bg-red-600 text-white text-[0.5rem] font-bold flex items-center justify-center rounded-full p-1">
                  {icon.notification}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="pb-4 ">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#054F31] text-white">
          AS
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
