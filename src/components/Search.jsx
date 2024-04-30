import { useState } from "react";

import Input from "./Input";

function ShowSearch({ shows, setCurrentSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const searchWithSpace =  newSearchTerm.split(' ').join('%20');
    setCurrentSearchTerm(searchWithSpace);
    setNewSearchTerm("");
  }
  function handleChange(event) {
    const searchTerm = event.target.value;
    setNewSearchTerm(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <Input
        shows={shows}
        newSearchTerm={newSearchTerm}
        handleChange={handleChange}
      /> */}
      <input
        type="text"
        id="search-input"
        value={newSearchTerm}
        onChange={handleChange}
      />
      <button type="submit">Go!</button>
    </form>
  );
}

export default ShowSearch;
