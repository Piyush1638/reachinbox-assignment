import Image from "next/image";
import React from "react";

const LeadDetailsActivities = () => {
  return (
    <div className="w-1/4 px-2 py-4 px- dark:bg-black bg-[#F9F9F9] border-l dark:border-[#353533] border-[#E0E0E0] max-w-md mx-auto">
      <h2 className="text-sm font-semibold text-[#454F5B] dark:text-white mb-4 dark:bg-[#23272C] py-2 px-3 rounded-lg bg-[#ECEFF3]">
        Lead Details
      </h2>

      <div className="pt-2 px-3 pb-4 flex flex-col gap-5">
        <LabelValuePair label="Name" value="Orlando" />
        <LabelValuePair label="Contact No" value="+54-9062827869" />
        <LabelValuePair label="Email ID" value="orlando@gmail.com" />
        <LabelValuePair label="Linkedin" value="linkedin.com/in/timvadde/" />
        <LabelValuePair label="Company Name" value="Reachinbox" />
      </div>

      <h2 className="font-semibold text-sm text-[#454F5B] dark:text-white mb-4 dark:bg-[#23272C] py-2 px-3 rounded-lg bg-[#ECEFF3]">
        Activities
      </h2>
      <div className="text-gray-400 flex flex-col gap-3 px-8 mt-10">
            <span className="font-semibold dark:text-white text-[#172B4D]">Campaign Name</span>
        <div className="flex text-xs dark:text-white text-[#454F5B] gap-2 items-center">
          <span className="dark:text-white font-semibold ">3</span>Steps{" "}
          <span className="dark:text-[#403F3F] font-extrabold">|</span>{" "}
          <span>5</span> days in sequence
        </div>
      </div>
      <div className="flex flex-col p-8">
        <ActivityStep
          step="Step 1: Email"
          date="3rd, Feb"
          img={"/google-login/RightSideBar/send.svg"}
        />
        <ActivityStep
          step="Step 2: Email"
          date="5th, Feb"
          img={"/google-login/RightSideBar/drafts.svg"}
        />
        <ActivityStep
          step="Step 3: Email"
          date="5th, Feb"
          img={"/google-login/RightSideBar/drafts.svg"}
        />
      </div>
    </div>
  );
};

export default LeadDetailsActivities;

interface LabelValuePair {
  label: string;
  value: string;
}

const LabelValuePair = ({ label, value }: LabelValuePair) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="dark:text-white text-[#637381] text-xs">{label}</span>
      <span className="dark:text-[#B9B9B9] text-black text-sm">{value}</span>
    </div>
  );
};

interface ActivityStep {
  step: string;
  date: string;
  img: string;
}

const ActivityStep = ({ step, date, img }: ActivityStep) => {
  return (
    <ul className="">
      <li className="relative flex gap-1 pb-9">
        <div
          className={`before:absolute before:left-4 ${
            step === "Step 3: Email" ? "" : "before:h-full"
          } before:w-[1px] dark:before:bg-[#283237] before:bg-[#e0e3e7]`}
        >
         <div className="flex items-center justify-center dark:bg-[#23272C] border border-[#DFE3E8] dark:border-[#41464B] bg-[#EEF1F4] p-1.5 rounded-full">
          <Image src={"/google-login/RightSideBar/steps-mail.svg"} alt="" height={20} width={20}/>
         </div>
        </div>
        <div className="ml-4">
          <div className="dark:text-white text-[#172B4D] font-semibold text-[13px] leading-4">
            {step}
          </div>
          <div className="dark:text-[#B9B9B9] text-[10px] flex items-center gap-2">
            <Image src={img} alt="" height={16} width={16} />
            Sent <span className="font-semibold leading-5">{date}</span>
          </div>
        </div>
      </li>
    </ul>
  );
};
