import { ReactNode, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IMovieContextProps {
  children: ReactNode;
}

interface IMovie {
  id: string;
  title: string;
}

interface IMovieContextDefault {
  movies: IMovie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

const movieContextDefaultData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};
export const MovieContext = createContext<IMovieContextDefault>(
  movieContextDefaultData
);

const MovieContextProvider = ({ children }: IMovieContextProps) => {
  const [movies, setMovies] = useState<IMovie[]>(
    movieContextDefaultData.movies
  );

  // addnew , delete movie
  const addMovie = (title: string) =>
    setMovies([
      ...movies,
      {
        id: uuidv4(),
        title,
      },
    ]);

  const deleteMovie = (id: string) =>
    setMovies(movies.filter((movie) => movie.id !== id));

  // props cho movie provider
  const movieContextDynamicData = { movies, addMovie, deleteMovie };

  return (
    <MovieContext.Provider value={movieContextDynamicData}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
