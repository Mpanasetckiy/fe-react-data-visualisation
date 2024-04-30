import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowSearch({ setCurrentSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const searchWithSpace = newSearchTerm.split(" ").join("%20");
    if (newSearchTerm !== "") {
      setCurrentSearchTerm(searchWithSpace);
      setNewSearchTerm("");
      navigate("/");
    }
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
