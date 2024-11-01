import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { useNavigate } from "react-router-dom";
import { gameResultAtom, levelAtom } from "store/states";
import successIcon from "assets/icon/Success_icon.svg";
import failuareIcon from "assets/icon/Failuare_icon.svg";

const GameResultModal = () => {
  const [isGameResult, setIsGameResult] = useAtom(gameResultAtom);
  const setLevel = useSetAtom(levelAtom);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
    setIsGameResult(undefined);
    setLevel(null);
  };

  if (!isGameResult) return null;

  const isSuccess = isGameResult === "success";
  const backgroundColor = isSuccess ? "bg-lime-300" : "bg-red-200";
  const resultIcon = isSuccess ? successIcon : failuareIcon;
  const resultText = isSuccess ? "Success" : "Failed";
  const resultMessage = isSuccess
    ? "Congrats! You made it!! 🎉"
    : "Don't give up. Try again!! 🤞";

  return (
    <div
      className={`flex fixed top-50 z-50 h-screen w-[600px] justify-center items-center bg-gray-400 bg-opacity-50 ${
        isGameResult ? "block" : "hidden"
      }`}
    >
      <div
        onClick={onClick}
        className={`relative w-[330px] p-5 rounded-lg cursor-pointer flex flex-col items-center ${backgroundColor}`}
      >
        <img src={resultIcon} alt="resultIcon" width="48px" />
        <div className="font-['Galmuri11-Bold'] p-4 text-center text-2xl">
          {resultText}
        </div>
        <div className="font-['Galmuri11-Bold'] text-center font-bold text-gray-500 text-lg">
          {resultMessage}
        </div>
      </div>
    </div>
  );
};

export default React.memo(GameResultModal);
