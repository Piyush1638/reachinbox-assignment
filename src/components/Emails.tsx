"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Email } from "@/lib/interfaces/Interfaces";
import Reply from "./Reply";

const Emails = () => {
  const selectedEmails = useSelector(
    (state: any) => state.selectedEmail.selectedEmails
  );

  return (
    <div className="w-3/5 relative h-[calc(100%-64px)] flex flex-col gap-4 dark:bg-black bg-[#f4f6f8] text-white">
      <EmailHeader />
      <div className="w-full h-[calc(100%-80px)] scrollbar-hide overflow-y-auto px-3 pb-12 absolute top-[85px]">
        {selectedEmails.length > 0 ? (
          selectedEmails.map((email: Email) => (
            <EmailContent email={email} key={email.id} />
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-[#172B4D] dark:text-white text-lg font-semibold">
              No email selected
            </p>
          </div>
        )}
      </div>
      {selectedEmails.length > 0 && (
        <Reply threadId={selectedEmails[0].threadId} />
      )}
    </div>
  );
};

export default Emails;

const EmailHeader = () => (
  <div className="w-full max-h-[70px] border-b border-[#E0E0E0] dark:border-[#F8FAFC33] dark:bg-black bg-white text-white p-4 flex items-center justify-between">
    <div>
      <h3 className="font-bold text-lg text-[#343A40] dark:text-white">
        Orlando
      </h3>
      <p className="text-sm dark:text-[#666666] text-[#343A40B2]">
        orladom@gmail.com
      </p>
    </div>
    <div className="flex items-center gap-2 text-[#D3D7DB] font-semibold text-xs">
      <button className="flex gap-1 max-h-8 items-center border dark:border-[#343A40] border-[#DFE3E8] dark:bg-[#1F1F1F] bg-transparent dark:text-white text-[#172B4D] py-1.5 px-2 rounded-[4px]">
        <div className="h-5 w-5 rounded-full dark:bg-[#444234] bg-[#FBF5D9] flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-yellow-300" />
        </div>
        Meeting Completed
        <RiArrowDropDownLine className="ml-1 text-3xl" />
      </button>
      <button className="border dark:border-[#343A40] border-[#DFE3E8] dark:bg-[#1F1F1F] bg-transparent dark:text-white text-[#172B4D] py-1.5 px-2 rounded-[4px] flex max-h-8 items-center">
        Move
        <RiArrowDropDownLine className="ml-2 text-xl" />
      </button>
      <button className="border dark:border-[#343A40] border-[#DFE3E8] dark:bg-[#1F1F1F] bg-transparent dark:text-white text-[#172B4D] p-2 rounded-[4px] flex  items-center">
        <BsThreeDots />
      </button>
    </div>
  </div>
);

const EmailContent = ({ email }: { email: Email | null }) => {
  const getTimeDifference = (sentAt: string) => {
    const emailDate = new Date(sentAt);
    const currentDate = new Date();
    const differenceInDays = Math.floor(
      (currentDate.getTime() - emailDate.getTime()) / (1000 * 3600 * 24)
    );

    if (differenceInDays === 0) return "Today";
    if (differenceInDays === 1) return "Yesterday";
    return `${differenceInDays} days ago`;
  };

  const daySent = email ? getTimeDifference(email.sentAt) : "No Date";

  return (
    <div className="border-y border-[#E0E0E0] dark:border-[#F8FAFC33] py-6 relative">
      <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 flex items-center justify-center dark:bg-[#171819] bg-[#EEF1F4] p-1 rounded-[4px] gap-4">
        <p className="text-xs text-[#637381] dark:text-white">{daySent}</p>
      </div>
      <div className="flex flex-col gap-8 border dark:border-[#343A40] rounded-[4px]">
        {/* upper salutation */}
        <div className="w-full dark:bg-[#141517] bg-white text-white p-4 rounded-md shadow-md">
          <div className="flex justify-between">
            <h3 className="font-semibold text-sm dark:text-[#F8FAFC] text-black">
              {email?.subject}
            </h3>
            <p className="dark:text-[#7F7F7F] text-[#637381] text-sm">
              {email ? new Date(email.sentAt).toLocaleString() : "No Date"}
            </p>
          </div>
          <div className="text-sm dark:text-[#AEAEAE] text-[#637381] mt-2 flex flex-col gap-1">
            <p>
              from : {email?.fromEmail}{" "}
              {email?.cc && <React.Fragment>cc : {email.cc}</React.Fragment>}
            </p>
            <p>to : {email?.toEmail}</p>
          </div>
          <div
            className="mt-4 text-sm dark:text-[#E1E0E0] text-[#172B4D]"
            dangerouslySetInnerHTML={{
              __html: email ? email.body : "No Content",
            }}
          />
        </div>
      </div>
    </div>
  );
};
