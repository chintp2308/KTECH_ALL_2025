import { useState } from "react";

const DropdownSelection = () => {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="Táo">Táo</option>
        <option value="Chuối">Chuối</option>
        <option value="Cam">Cam</option>
      </select>
      <p>Trái cây đã chọn: {selectedFruit}</p>
    </div>
  );
};

export default DropdownSelection;
