import { getByText } from "@testing-library/react";
import React, { useState } from "react";

const SearchInput = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search-input">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchInput;
