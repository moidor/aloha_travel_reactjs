import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control w-25 ml-3"
      placeholder="Rechercher..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
