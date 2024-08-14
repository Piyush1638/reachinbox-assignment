"use client";
import { useState, useEffect } from "react";
import { BsReplyFill } from "react-icons/bs";
import ReplyModal from "./ReplyModal";

const Reply = ({ threadId }: { threadId: number }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "r") {
        event.preventDefault(); // Prevent the default browser refresh (Ctrl+R)
        setOpenModal(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {openModal ? (
        <ReplyModal setOpenModal={setOpenModal} threadId={threadId} />
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="bg-gradient-to-r from-[#4B63DD] absolute bottom-1 left-4 to-[#0524BFFC] rounded-[4px] flex items-center justify-center gap-2 w-fit py-2 ps-6 pe-10 font-semibold text-sm"
        >
          <BsReplyFill /> Reply
        </button>
      )}
    </>
  );
};

export default Reply;
