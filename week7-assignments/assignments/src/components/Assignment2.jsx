import { useState } from "react";
export function BackgroundChanger() {
  const [bgColor, setBgColor] = useState("orange");
  return (
    <div
      className="full-screen"
      style={{ background: bgColor, paddingTop: "40rem" }}
    >
      <div className="border-2 rounded-full w-2/3 text-center ml-auto mr-auto shadow-2xl bg-white">
        <button
          className="bg-red-600 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("red");
          }}
        >
          Red
        </button>
        <button
          className="bg-yellow-400 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="bg-black pl-6 pr-6 pt-1 pb-1 rounded-full text-white ml-5 mr-5"
          onClick={() => {
            setBgColor("black");
          }}
        >
          Black
        </button>
        <button
          className="bg-purple-800 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className="bg-green-500 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("green");
          }}
        >
          Green
        </button>
        <button
          className="bg-blue-500 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="bg-orange-500 pl-6 pr-6 pt-1 pb-1 rounded-full ml-5 mr-5"
          onClick={() => {
            setBgColor("orange");
          }}
        >
          Default
        </button>
      </div>
    </div>
  );
}
