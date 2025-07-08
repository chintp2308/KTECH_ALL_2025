import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "BẬT" : "TẮT"}</button>
      <p>Trạng thái: {isOn ? "BẬT" : "TẮT"}</p>
    </div>
  );
};

export default ToggleSwitch;
