import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function RatingBasic({ rating }) {
  const formatRating = rating / 2;

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        "& .MuiRating-iconEmpty": { color: "#d7d7d7" },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        name="read-only"
        value={formatRating}
        max={5}
        precision={0.1}
        readOnly
      />
    </Box>
  );
}

export default RatingBasic;
