import { ReactNode, createContext, useReducer } from "react";
import { TopMovieState, topMovieReducer } from "../reducers/TopMoviesReducer";
import { TopMovieActionType } from "../reducers/types";
import topMoviesInfo from "../api/getTopMovies";

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

interface ITopMovieContextProps {
  children: ReactNode;
}

interface ITopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}
const topMovieDefault: TopMovieState = [];

export const TopMovieContext = createContext<ITopMovieContextDefault>({
  topMovies: topMovieDefault,
  getTopMovies: () => Promise.resolve(void 0), //void 0==undifined
  toggleWatched: (id: string) => {},
});

const TopMovieContextProvider = ({ children }: ITopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMovieDefault);

  //   get top movies from api
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo); //lay 10 films 1 luc
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((movie) => ({ ...movie.data, Watched: false })),
      //   payload: [{ ...topMovie.data, Watched: false }],
    });
  };

  //   toggle watched
  const toggleWatched = (imdbID: string) =>
    dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID });

  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMovieContext.Provider value={topMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};

export default TopMovieContextProvider;
