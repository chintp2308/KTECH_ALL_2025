import React, { useState } from "react";

const KeyPressDisplay = () => {
  const [keyPressed, setKeyPressed] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyPressed(e.key);
  };

  return (
    <div>
      <input type="text" onKeyPress={handleKeyPress} />
      <p>Key pressed: {keyPressed}</p>
    </div>
  );
};

export default KeyPressDisplay;
