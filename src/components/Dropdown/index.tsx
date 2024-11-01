import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <DropdownButton isOpen={isOpen} handleDropDown={handleDropDown} />
      <DropdownList isOpen={isOpen} />
    </div>
  );
};
