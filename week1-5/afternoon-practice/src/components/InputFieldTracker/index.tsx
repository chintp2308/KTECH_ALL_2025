import { useState } from "react";

const InputFieldTracker = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Bạn đã nhập: {inputValue.length > 0 ? inputValue : "không có gì"}</p>
    </div>
  );
};
export default InputFieldTracker;
