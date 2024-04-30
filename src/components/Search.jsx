import { useState } from "react";

function ShowSearch({ setCurrentSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const searchWithSpace = newSearchTerm.split(" ").join("%20");
    setCurrentSearchTerm(searchWithSpace);
    setNewSearchTerm("");
  }
  function handleChange(event) {
    const searchTerm = event.target.value;
    setNewSearchTerm(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
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
