import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("Tu busqueda...");

  return (
    <div className="SearchBar__Container">
      <input
        className="SearchBar__Input"
        type="text"
        name="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setSearch("")}
      ></input>
    </div>
  );
};

export default SearchBar;
