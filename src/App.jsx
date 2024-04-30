import { useState, useEffect } from "react";
import "./App.css";

import Search from "./components/Search";
import List from "./components/List";
import Header from "./components/Header";

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
          console.log(res);
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
      <section>
        <List currentSearchTerm={currentSearchTerm} />
      </section>
    </>
  );
}

export default App;
