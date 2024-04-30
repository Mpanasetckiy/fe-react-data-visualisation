import { useState } from "react";

import Input from "./Input";

function ShowSearch({ shows, setCurrentSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  }
  function handleChange(event) {
    console.log(event.target.innerText);
    setNewSearchTerm(event.target.innerText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        shows={shows}
        newSearchTerm={newSearchTerm}
        handleChange={handleChange}
      />
      {/* <input
        type="text"
        id="search-input"
        value={newSearchTerm}
        onChange={handleChange}
      /> */}
      <button type="submit">Go!</button>
    </form>
  );
}

export default ShowSearch;
