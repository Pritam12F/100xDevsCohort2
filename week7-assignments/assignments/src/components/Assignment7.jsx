import { useState, useRef } from "react";

export function Birthdaywisher() {
  const [name, setName] = useState(null);
  const input = useRef(null);
  return (
    <div
      id="maindiv"
      style={{ background: 'url("/birthday.jpeg")' }}
      className="bg-cover pt-20"
    >
      <div className="bg-orange-600 bg-opacity-50 w-1/2 mx-auto text-center p-4 rounded-lg">
        <h2 className="font-semibold text-2xl mb-6">Enter Your Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded-lg w-full"
          ref={input}
        ></input>
        <br></br>
        <button
          className="mt-8 bg-blue-500 px-8 py-2 rounded-lg"
          onClick={() => {
            setName(input.current.value);
          }}
        >
          Done
        </button>
      </div>
      {name == null ? null : (
        <div className="flex mt-10 justify-center">
          <div className="bg-white p-10 rounded-md mx-5">
            <h1>Happy Birthday {name}!!!</h1>
            <p>Many many happy returns of the day!</p>
          </div>
          <div className="bg-white p-10 rounded-md mx-5">
            <h1>Happy Birthday {name}!!!</h1>
            <p>Many many happy returns of the day!</p>
          </div>
          <div className="bg-white p-10 rounded-md mx-5">
            <h1>Happy Birthday {name}!!!</h1>
            <p>Many many happy returns of the day!</p>
          </div>
        </div>
      )}
    </div>
  );
}
