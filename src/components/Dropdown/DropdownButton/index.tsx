import React from "react";
import expandIcon from "assets/icon/Expand_icon.svg";

interface DropdownButonProps {
  isOpen: boolean;
  handleDropDown: () => void;
}

const DropdownButton = ({ isOpen, handleDropDown }: DropdownButonProps) => {
  return (
    <button
      onClick={handleDropDown}
      type="button"
      className="font-['Galmuri11-Bold'] relative w-44 text-neutral-800 bg-white hover:bg-lime-300 font-bold rounded-lg text-base px-5 py-2.5 focus:outline-none"
    >
      Level
      <span
        className={`absolute top-[3px] right-1 transition-transform duration-200 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <img src={expandIcon} alt="expand" width="38px" />
      </span>
    </button>
  );
};
export default React.memo(DropdownButton);
