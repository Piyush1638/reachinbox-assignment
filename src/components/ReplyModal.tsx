"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegFaceSmile } from "react-icons/fa6";
import {
  MdOutlineInsertPhoto,
  MdOutlineInsertLink,
  MdPersonRemove,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TbBracketsAngle } from "react-icons/tb";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaFontSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  threadId: number;
}

const ReplyModal: React.FC<ModalProps> = ({ setOpenModal, threadId }) => {
  const [formData, setFormData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const { to, from, subject, body } = formData;

  const [isSaved, setIsSaved] = useState(false);
  const [showVariables, setShowVariables] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem(`replyFormData-${threadId}`);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [threadId]);

  const handleReply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/reply-email", {
        thread_id: String(threadId),
        to,
        from,
        subject,
        body,
      });
      console.log(response.data);
    } catch (error: any) {
      console.log("Error: ", error.message);
    }
  };

  const handleSave = async () => {
    localStorage.setItem(`replyFormData-${threadId}`, JSON.stringify(formData));
    setIsSaved(true);
  };

  const handleInsertVariable = (variable: string) => {
    setFormData((prevData) => ({
      ...prevData,
      body: prevData.body + variable,
    }));
    setShowVariables(false); // Close variables dropdown after selection
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSaved(false);
  };

  return (
    <div className="z-10 h-3/5 w-1/2 dark:bg-[#141517] border-t dark:border-[#2E3236] bg-white rounded-lg text-white fixed inset-0 m-auto shadow-lg">
      <div className="flex rounded-tr-lg rounded-tl-lg justify-between items-center border-b border-[#41464B] py-5 px-8 max-h-9 dark:bg-[#23272C]">
        <h2 className="font-bold text-xs dark:text-[#BAB9BD] text-[#343A40]">
          Reply
        </h2>
        <button
          className="dark:text-white text-[#343A40] font-semibold text-lg"
          onClick={() => setOpenModal(false)}
        >
          ×
        </button>
      </div>

      <form
        action=""
        onSubmit={handleReply}
        className="rounded-bl-lg rounded-br-lg flex flex-col h-full bg-transparent dark:bg-[#141517] bg-white border dark:border-[#2E3236]"
      >
        <div className="flex items-center gap-2 border-b dark:border-[#34383D] px-8 py-2 text-xs">
          <label
            htmlFor="to"
            className="dark:text-[#BAB9BD] text-black text-nowrap"
          >
            To :
          </label>
          <input
            type="email"
            name="to"
            value={to}
            onChange={onChange}
            className="bg-transparent outline-none font-semibold w-full dark:text-white text-black"
          />
        </div>
        <div className="flex items-center gap-2 border-b dark:border-[#34383D] px-8 py-2 text-xs">
          <label
            htmlFor="from"
            className="dark:text-[#BAB9BD] text-black text-nowrap"
          >
            From :
          </label>
          <input
            type="email"
            name="from"
            value={from}
            onChange={onChange}
            className="bg-transparent outline-none font-semibold w-full dark:text-white text-black"
          />
        </div>
        <div className="flex items-center gap-2 border-b dark:border-[#34383D] px-8 py-2 text-xs">
          <label
            htmlFor="subject"
            className="dark:text-[#BAB9BD] text-black text-nowrap"
          >
            Subject :
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            className="bg-transparent outline-none font-semibold w-full dark:text-white text-black"
          />
        </div>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={onChange}
          className="w-full h-full text-sm bg-transparent outline-none px-8 py-4 dark:text-white text-black"
        />

        <div className="flex items-center gap-5 px-8 border-t dark:border-[#2E3236] py-4">
          <button
            type="submit"
            className="bg-gradient-to-r flex gap-4 from-[#4B63DD] to-[#0524BFFC] text-white font-semibold text-sm py-2 px-5 rounded"
          >
            Send <IoMdArrowDropdown className="text-xl" />
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-gradient-to-r from-[#34D399] to-[#059669] text-white font-semibold text-sm py-2 px-2 rounded"
          >
            {isSaved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => setShowVariables(!showVariables)}
            className="flex items-center gap-1 dark:text-[#ADADAD] text-[#454F5B] text-sm font-semibold"
          >
            <AiOutlineThunderbolt className="text-2xl dark:text-[#ADADAD]" />
            Variables
          </button>
          {showVariables && (
            <div className="absolute bg-white dark:bg-[#141517] border dark:border-[#2E3236] rounded shadow-lg p-2">
              <button
                type="button"
                onClick={() => handleInsertVariable("Piyush Kumar Singh ")}
                className="block p-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#2E3236]"
              >
                {`Piyush Kumar Singh`}
              </button>
              <button
                type="button"
                onClick={() => handleInsertVariable("piyushkumarsingh665@gmail.com ")}
                className="block p-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#2E3236]"
              >
                {`piyushkumarsingh665@gmail.com`}
              </button>
              {/* Add more variables as needed */}
            </div>
          )}
          <div className="flex items-center cursor-pointer gap-1 dark:text-[#ADADAD] text-[#454F5B] text-sm text-nowrap font-semibold">
            <MdOutlineRemoveRedEye className="text-2xl dark:text-[#ADADAD]" />
            Preview Email
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center cursor-pointer dark:text-[#ADADAD] text-black">
              <LiaFontSolid className="text-2xl" />
              <BsThreeDotsVertical className="text-xs" />
            </div>
            <MdOutlineInsertLink className="text-2xl cursor-pointer dark:text-[#ADADAD] text-black" />
            <MdOutlineInsertPhoto className="text-2xl cursor-pointer dark:text-[#ADADAD] text-black" />
            <FaRegFaceSmile className="text-2xl cursor-pointer dark:text-[#ADADAD] text-black" />
            <MdPersonRemove className="text-2xl cursor-pointer dark:text-[#ADADAD] text-black" />
            <TbBracketsAngle className="text-2xl cursor-pointer dark:text-[#ADADAD] text-black" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReplyModal;
