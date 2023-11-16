import React from "react";
import { useState } from "react";
import {ReactComponent as SearchIcon} from '../../Assets/SearchIcon.svg';
import './search.css';

const Search = () => {
  const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	}

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="wrapper" onSubmit={handleSubmit}>
        <input
          className="search"
          placeholder="Search an album of your choice"
          value={search}
          onChange={handleChange}
          required
        />
				<button className="button-icon" type="submit">
					<SearchIcon />
				</button>
      </form>
    </>
  );
};

export default Search;
