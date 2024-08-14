"use client";
import { RootState } from "@/lib/store";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DeleteEmail: React.FC = () => {
  const selectedEmails = useSelector(
    (state: RootState) => state.selectedEmail.selectedEmails
  );

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = (show: boolean) => {
    setIsVisible(show);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "d" && selectedEmails.length > 0) {
      event.preventDefault();
      toggleModal(true);
    }
  };

  useEffect(() => {
    const handleKeyDownWrapper = (event: KeyboardEvent) => handleKeyDown(event);

    window.addEventListener("keydown", handleKeyDownWrapper);
    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
    };
  }, [selectedEmails]);

  const onCancel = () => {
    toggleModal(false);
  };

  const onDelete = async () => {
    try {
      const response = await axios.delete("api/delete-email-thread", {
        params: {
          thread_id: String(selectedEmails[0].threadId),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
    toggleModal(false);
  };

  return (
    <>
      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
            <div className="bg-gradient-to-b from-[#141517] to-[#2F3338] rounded-lg p-8 text-center shadow-lg w-96">
              <h2 className="text-white text-xl font-semibold mb-4">
                Are you sure ?
              </h2>
              <p className="text-gray-400 mb-8">
                Your selected email will be deleted.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={onCancel}
                  className="bg-gray-700 text-white py-2 px-6 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={onDelete}
                  className="bg-red-600 text-white py-2 px-6 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteEmail;
