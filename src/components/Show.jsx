import Rating from "./Rating";

function Show({ showItem }) {
  const {
    id,
    name,
    image,
    rating: { average },
  } = showItem;
  return (
    <li key={id}>
      <h3>{name}</h3>

      <img src={image ? image.medium : ""} alt="poster" />
      {average ? <Rating label={true} rating={average} /> : <p></p>}
    </li>
  );
}

export default Show;
