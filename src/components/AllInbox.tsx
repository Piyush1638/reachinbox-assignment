"use client";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Image from "next/image";
import { Email } from "@/lib/interfaces/Interfaces";
import { useDispatch } from "react-redux";
import { setSelectedEmails } from "@/lib/features/SelectedEmailsSlice";

const AllInbox = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmailId, setSelectedEmailId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMails = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/all-mails");
        setEmails(response.data.data.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMails();
  }, []);

  const handleEmailClick = async (email: Email) => {
    setSelectedEmailId(email.id);
    const thread_id = email.threadId;
    try {
      const response = await axios.get("/api/onebox-thread", {
        params: { thread_id: String(email.threadId) },
      });
      dispatch(setSelectedEmails(response.data.data.data));
    } catch (error) {
      console.error("Error fetching thread:", error);
    }
  };

  return (
    <div className="w-1/4 h-full border-r dark:border-[#33383F] border-[#E0E0E0] dark:bg-black bg-white flex flex-col px-4 gap-4">
      {/* All Inbox */}
      <div className="pt-5">
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-start justify-between font-medium">
            <h3 className="text-[#4285F4] text-xl font-bold flex items-center">
              All Inbox(s){" "}
              <RiArrowDropDownLine className="text-3xl text-[#4285F4] cursor-pointer" />
            </h3>
            <div className="dark:bg-[#25262B] border border-[#DFE3E8] dark:border-none h-8 w-8 flex items-center justify-center rounded-md">
              <MdRefresh className="text-xl dark:text-white" />
            </div>
          </div>
          <p className="text-sm leading-5 text-[#7F7F7F]">
            <span className="font-bold text-black dark:text-white">25/25</span>{" "}
            Inboxes selected
          </p>
        </div>
      </div>

      {/* Search and New Replies */}
      <div className="flex flex-col gap-4 py-2">
        <div className="flex items-center justify-start gap-2 border border-[#DFE3E8] dark:border-[#3a3d41] rounded-[0.25rem] dark:bg-[#23272C] bg-[#F4F6F8] px-[0.375rem] py-1">
          <CiSearch className="text-xl text-[#172B4D] dark:text-[#FFFFFF]" />
          {/* <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent dark:text-white text-black outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}
        </div>

        <div className="flex items-center justify-between dark:text-white">
          <div className="flex items-center gap-1 leading-5 font-semibold">
            <div className="h-[1.625rem] w-9 text-[#5C7CFA] bg-[#ECECEC] rounded-full flex items-center justify-center dark:bg-[#222426]">
              26
            </div>
            New Replies
          </div>
          <div className="flex items-center gap-1">
            Newest
            <RiArrowDropDownLine className="text-3xl dark:text-white text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Inbox List */}
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          {emails.map((email) => (
            <EmailComponent
              key={email.id}
              email={email}
              isSelected={selectedEmailId === email.id}
              onClick={() => handleEmailClick(email)} // Pass the entire email object
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInbox;

const Loading = () => (
  <div className="flex justify-center flex-col items-center h-full gap-2">
    <p className="dark:text-white text-black">Wait! Fetching all mails...</p>
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#5C7CFA]"></div>
  </div>
);

interface EmailComponentProps {
  email: Email;
  isSelected: boolean;
  onClick: () => void;
}

const EmailComponent: React.FC<EmailComponentProps> = ({
  email,
  isSelected,
  onClick,
}) => {
  const truncatedSubject =
    email.subject.length > 20
      ? `${email.subject.substring(0, 20)}...`
      : email.subject;

  return (
    <div
      onClick={onClick}
      className={`dark:border-t-gray-500 border-t cursor-pointer relative py-3 px-4 flex flex-col gap-2 ${
        isSelected
          ? "border-l-4 border-l-[#5C7CFA] bg-[#F4FAFF] dark:bg-black"
          : "dark:border-gray-500 border-white"
      }`}
    >
      {!email.isRead && (
        <div className="h-2 w-2 rounded-full bg-[#5C7CFA] absolute -left-1 top-5" />
      )}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          {/* Email */}
          <p className="dark:text-[#E1E0E0] text-[#343A40] font-medium text-sm">
            {email.fromEmail}
          </p>
          <p className="dark:text-[#E1E0E0] text-[#172B4D] text-sm">
            {truncatedSubject}
          </p>
        </div>
        <p className="dark:text-[#FCFCFC66] font-normal text-xs text-nowrap">
          {new Date(email.sentAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="dark:bg-[#222426] bg-[#F0F0F0] text-[#57E0A6] flex items-center gap-1 font-semibold text-xs leading-3 py-[3px] px-2 rounded-full w-fit">
          <div className="h-2 w-2 bg-[#57E0A6] rounded-full" />
          Interested
        </div>
        <div className="dark:bg-[#222426] bg-[#F0F0F0] dark:text-white text-[#637381] flex items-center gap-1 font-semibold text-xs leading-3 py-[3px] px-2 rounded-full w-fit">
          <Image
            src={"/google-login/sidebar/message.svg"}
            alt=""
            height={12}
            width={12}
          />
          Campaign Name
        </div>
      </div>
    </div>
  );
};
