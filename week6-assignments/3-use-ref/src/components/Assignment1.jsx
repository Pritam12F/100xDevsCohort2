import { useEffect, useRef, useState } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const myInputRef = useRef(null);
  const [click, setClick] = useState(false);
  useEffect(() => {
    myInputRef.current.focus();
  }, [click]);

  const handleButtonClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={myInputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
