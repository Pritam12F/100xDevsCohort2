import { useMemo, useState } from "react";

export function ParagraphGen() {
  const [words, setWords] = useState(null);
  const [alert, setAlert] = useState("");

  const wordsarray = [
    "hi",
    "my",
    "name",
    "is",
    "pritam",
    "and",
    "I",
    "am",
    "a",
    "fullstack",
    "developer",
  ];
  let paragraph = useMemo(() => {
    let paragraph = "";
    for (let i = 0; i < words; ++i) {
      const word = wordsarray[Math.floor(Math.random() * wordsarray.length)];
      paragraph += word + " ";
    }
    return paragraph;
  }, [words]);

  return (
    <div className="w-2/3 ml-auto mr-auto text-center mt-10">
      <h2 className="mb-4 font-semibold">Para Generator</h2>
      <input
        type="text"
        placeholder="Enter number of words"
        className="border-2-black w-2/3 p-2"
        onChange={(e) => {
          const num = parseInt(e.target.value);
          if (isNaN(num)) {
            setAlert("You didn't enter a number!");
            paragraph = "";
          } else {
            setAlert("");
            setWords(num);
          }
        }}
      ></input>
      <div>{alert}</div>
      <div>{paragraph ? paragraph : null}</div>
    </div>
  );
}
