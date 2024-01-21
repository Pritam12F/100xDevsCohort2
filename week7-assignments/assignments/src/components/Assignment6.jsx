import { useRef, useState, useEffect } from "react";

export function Otpgenerator() {
  const [number, setNumber] = useState(null);
  const [otp, setOtp] = useState(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  function generateOtp() {
    let code = "";
    for (let i = 0; i < 4; ++i) {
      const number = Math.floor(Math.random() * 10);
      code += number;
    }
    setOtp(code);
  }
  return (
    <div
      className="bg-gray-900 pt-20"
      id="maindiv"
      onMouseEnter={() => {
        if (one.current) {
          one.current.focus();
        }
      }}
    >
      <div className="mx-auto text-center text-white">
        <h1 className="font-semibold text-3xl">Login via OTP</h1>
        {otp == null ? (
          <div className="mt-10">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="bg-gray-900 w-1/3 border-2 border-white p-2 rounded-lg"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            ></input>
            <br></br>
            <button
              className="border-white border-2 mt-8 p-2 rounded-lg"
              onClick={() => {
                if (number) {
                  generateOtp();
                } else {
                  alert("Enter a number first");
                }
              }}
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <div className="mt-5">
              <input
                type="text"
                maxLength={1}
                className="bg-gray-900 border-2 border-white w-12 h-12 rounded-lg text-center mx-5"
                ref={one}
                onKeyUp={() => {
                  two.current.focus();
                }}
              ></input>
              <input
                type="text"
                className="bg-gray-900 border-2 border-white w-12 h-12 rounded-lg text-center mx-5"
                maxLength={1}
                ref={two}
                onKeyUp={() => {
                  three.current.focus();
                }}
              ></input>
              <input
                type="text"
                className="bg-gray-900 border-2 border-white w-12 h-12 rounded-lg text-center mx-5"
                maxLength={1}
                ref={three}
                onKeyUp={() => {
                  four.current.focus();
                }}
              ></input>
              <input
                type="text"
                className="bg-gray-900 border-2 border-white w-12 h-12 rounded-lg text-center mx-5"
                maxLength={1}
                ref={four}
              ></input>
            </div>
            <button
              className="border-2 border-white py-2 px-6 rounded-lg mt-8"
              onClick={(e) => {
                if (e.target.value == otp) {
                  alert("You successfully logged in");
                } else {
                  alert(`The correct otp was ${otp}`);
                }
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
