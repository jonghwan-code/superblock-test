import { useNavigate } from "react-router-dom";
import { DIFFICULTY } from "store/const";
import { useSetAtom } from "jotai";
import { levelAtom } from "store/states";
import React from "react";

interface DropdownListProps {
  isOpen: boolean;
}

const DropdownList = ({ isOpen }: DropdownListProps) => {
  const navigate = useNavigate();
  const setLevel = useSetAtom(levelAtom);

  const onClick = (level: number) => {
    navigate("/game");
    setLevel(level);
  };

  return (
    <div
      className={`absolute top-[50px] rounded-lg w-44 bg-white ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="py-2 text-sm text-neutral-700 font-bold">
        {DIFFICULTY.map(({ number, label }) => {
          return (
            <li key={label}>
              <div
                onClick={() => onClick(number)}
                className="font-['Galmuri11-Bold'] text-center px-4 py-2 hover:bg-lime-300 cursor-pointer"
              >
                {label}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(DropdownList);
