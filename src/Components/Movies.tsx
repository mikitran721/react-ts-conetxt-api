import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "5px",
    },
    movieChip: {
      fontSize: "2rem",
      padding: "30px 10px",
      margin: "5px",
    },
  })
);

const Movies = () => {
  const classes = useStyles();

  // state
  const [movie, setMovie] = useState("");

  const onMovieInputchange = (e: ChangeEvent<HTMLInputElement>) =>
    setMovie(e.target.value);

  // context
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  // const chipColor = theme === "primary" ? "primary" : "secondary";
  const chipColor = theme as Exclude<PropTypes.Color, "inherit">;
  console.log(typeof theme);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputchange}
          value={movie}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>

      {/* display movie list */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            // color="primary"
            color={chipColor}
            className={classes.movieChip}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
