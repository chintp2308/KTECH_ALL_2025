import React from "react";
import { useState } from "react";

// type Props = {}

const Bai1_BoDem = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Nhấp vào tôi</button>
      <p>Số lần nhấp: {count}</p>
    </div>
  );
};
export default Bai1_BoDem;
