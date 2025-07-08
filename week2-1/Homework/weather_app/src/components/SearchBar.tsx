import React from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

type SearchBarProps = {
  city: string;
  setCity: (city: string) => void;
  onSearch: () => void;
};

const SearchBar = ({ city, setCity, onSearch }: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Hanoi"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <CiSearch className={styles.searchIcon} onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
