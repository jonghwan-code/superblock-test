import { PropsWithChildren } from "react";

export const Background = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="w-[600px] overflow-hidden h-full absolute bg-black">
        <div
          style={{ animationDelay: "1.3s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[1500px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "0.7s" }}
            className="bg-red-300 opacity-0 rounded-full w-25 h-25 animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "2s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[450px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "2.1s" }}
            className="bg-yellow-100 opacity-0 rounded-full w-16 h-16 animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "4.7s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[255px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "3.8s" }}
            className="bg-green-300 opacity-0 rounded-full w-10 h-10 animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "0s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[185px] animate-balloonX "
        >
          <div
            style={{ animationDelay: "0.5s" }}
            className="bg-indigo-300 opacity-0 rounded-full w-12 h-12 animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "0.7s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[55px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "1.5s" }}
            className="bg-yellow-300 opacity-0 rounded-full w-20 h-20 animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "2s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[350px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "6s" }}
            className="bg-blue-700 opacity-0 rounded-full w-20 h-20 shadow-lg animate-balloonY"
          ></div>
        </div>

        <div
          style={{ animationDelay: "5s" }}
          className="absolute bottom-0 w-[55px] h-[55px] left-[320px] animate-balloonX"
        >
          <div
            style={{ animationDelay: "2.4s" }}
            className="bg-lime-800 opacity-0 rounded-full w-[100px] h-[100px] shadow-lg animate-balloonY"
          ></div>
        </div>
      </div>
      {children}
    </div>
  );
};
