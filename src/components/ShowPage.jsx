import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { MoonLoader } from "react-spinners";
import Rating from "./Rating";

const ShowPage = () => {
  const [currentShow, setCurrentShow] = useState(null);
  const [currentShowId, setCurrentShowId] = useState(null);

  const { show_id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentShowId(show_id);
    fetchShowById();
  }, []);

  function fetchShowById() {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/shows/${show_id}`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject();
        }
        return res.json();
      })
      .then((data) => {
        setCurrentShow(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        // setError(true);
      });
  }

  console.log(currentShow);
  return !isLoading ? (
    <div className="page-container">
      <div>
        <h3>{currentShow.name}</h3>
        <img src={currentShow.image.original} alt="" />
      </div>
      <div className="page-block">
        <div>{currentShow.summary}</div>
        <div>
          <p>Information</p>
          <table>
            <tbody className="">
              <tr>
                <td>Country:</td>
                <td>{currentShow.network.country.name}</td>
              </tr>
              <tr>
                <td>Rating: </td>
                <td>{<Rating rating={currentShow.rating.average} />}</td>
              </tr>
              <tr>
                <td>Released:</td>
                <td>{currentShow.premiered}</td>
              </tr>
              <tr>
                <td>Ended:</td>
                <td>{currentShow.ended}</td>
              </tr>
              <tr>
                <td>Genres:</td>
                <td>{currentShow.genres.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <MoonLoader />
  );
};
export default ShowPage;
