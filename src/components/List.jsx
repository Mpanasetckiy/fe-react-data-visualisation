import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  // const handleClick = (e) => {
  //   const showId = e.target.id;
  //   setCurrentShowId(showId);
  // };

  return (
    <ul className="shows-list">
      {shows.length === 0 ? (
        <h3>No shows :(</h3>
      ) : (
        shows.map(({ show }) => {
          return (
            <Link to={`/show/${show.id}`} key={show.id}>
              <Show key={show.id} showItem={show} />
            </Link>
          );
        })
      )}
    </ul>
  );
}

export default ShowList;
