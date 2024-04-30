import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Search from "./components/Search";
import List from "./components/List";
import Header from "./components/Header";
import ShowPage from "./components/ShowPage";

function App() {
  const [currentSearchTerm, setCurrentSearchTerm] = useState("Arrow");
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = () => {
    setIsLoading(true);
    fetch("https://api.tvmaze.com/shows")
      .then((res) => {
        if (!res.ok) {
          return Promise.reject();
        }
        return res.json();
      })
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Search setCurrentSearchTerm={setCurrentSearchTerm} shows={shows} />
      <Routes>
        <Route
          path="/"
          element={<List currentSearchTerm={currentSearchTerm} />}
        />
        <Route path="/show/:show_id" element={<ShowPage />} />
      </Routes>
    </>
  );
}

export default App;
