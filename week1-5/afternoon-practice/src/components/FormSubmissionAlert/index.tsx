import React, { useState } from "react";
const FormSubmissionAlert = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormSubmissionAlert;
