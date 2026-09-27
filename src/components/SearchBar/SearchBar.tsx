import { useState } from "react";
import type { SubmitEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <header className={s.headerContainer}>
      <form className={s.inputContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={s.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
