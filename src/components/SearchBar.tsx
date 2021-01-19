import React, { FC } from "react";

const SearchBar: FC = () => (
  <form className="m-auto h-10 flex rounded-md mt-20 w-80">
    <input
      type="text"
      placeholder="Search for beer..."
      className="w-full p-3 rounded-tl-md rounded-bl-md shadow-md focus:outline-none focus-visible:ring"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white p-3 flex items-center rounded-tr-md rounded-br-md shadow-md"
    >
      Search
    </button>
  </form>
);

export default SearchBar;
