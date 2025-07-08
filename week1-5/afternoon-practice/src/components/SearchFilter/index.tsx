import React, { useState } from "react";

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  // Lọc danh sách theo từ khóa (không phân biệt chữ hoa thường)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      <input type="text" value={keyword} onChange={handleSearch} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
