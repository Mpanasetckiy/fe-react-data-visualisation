import { useEffect, useState } from "react";

function ShowList(props) {
  const { currentSearchTerm } = props;
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ul>
      {shows.length === 0 ? (
        <h2>No shows :( </h2>
      ) : (
        shows.map(
          ({
            show: {
              id,
              name,
              image,
              rating: { average },
            },
          }) => {
            return (
              <li key={id}>
                <h3>{name}</h3>

                <img src={image ? image.medium : ""} alt="poster" />

                <p>Rating: {average ? average : "_"}</p>
              </li>
            );
          }
        )
      )}
    </ul>
  );
}

export default ShowList;
