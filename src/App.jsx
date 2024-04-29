import { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("Arrow");

  return (
    <>
      <Header />
      <Search setCurrentSearchTerm={setCurrentSearchTerm} />
      <List currentSearchTerm={currentSearchTerm} />
    </>
  );
}

export default App;
