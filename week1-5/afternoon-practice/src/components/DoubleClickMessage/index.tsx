import React, { useState } from "react";

const DoubleClickMessage = () => {
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const handleClick = () => {
    setIsDoubleClicked(true);

    setTimeout(() => {
      setIsDoubleClicked(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isDoubleClicked && <p>Double-clicked!</p>}
    </div>
  );
};

export default DoubleClickMessage;
