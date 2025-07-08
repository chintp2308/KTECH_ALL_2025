import React, { useState } from "react";

const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <p>Checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
};

export default CheckboxToggle;
