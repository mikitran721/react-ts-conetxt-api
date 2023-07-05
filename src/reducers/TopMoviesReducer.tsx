import { TopMovieActionType } from "./types";

interface ITopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}
export type TopMovieState = ITopMovie[];

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

type TopMovieAction =
  | {
      type: typeof GET_TOP_MOVIES;
      payload: ITopMovie[];
    }
  | {
      type: typeof TOGGLE_TOP_MOVIE_WATCHED;
      payload: string;
    };
export const topMovieReducer = (
  state: TopMovieState,
  action: TopMovieAction
) => {
  switch (action.type) {
    case "GET_TOP_MOVIES":
      return action.payload;
    case "TOGGLE_TOP_MOVIE_WATCHED":
      return state.map((topMovie) =>
        topMovie.imdbID === action.payload
          ? { ...topMovie, Watched: !topMovie.Watched }
          : topMovie
      );
    default:
      return state;
  }
};
