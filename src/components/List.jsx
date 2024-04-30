import { useEffect, useState } from "react";

import { MoonLoader } from "react-spinners";

import Show from "./Show";

function ShowList(props) {
  const { currentSearchTerm } = props;
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchShows();
  }, [currentSearchTerm]);

  function fetchShows() {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${currentSearchTerm}`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setShows(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }

  if (isLoading) {
    return (
      <ul>
        <MoonLoader color="#646cff" className="loader" />
      </ul>
    );
  }

  return (
    <ul className="shows-list">
      {shows.length === 0 ? (
        <h3>No shows :(</h3>
      ) : (
        shows.map(({ show } ) => {
            return (
              <Show key={show.id} showItem={show} />
            );
          }
        )
      )}
    </ul>
  );
}

export default ShowList;
