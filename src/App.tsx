import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemBtn from "./Components/ToggleThemBtn";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./Components/Movies";
import AuthContextProvider from "./contexts/AuthContext";
import { Grid } from "@material-ui/core";
import TopMovies from "./Components/TopMovies";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
  return (
    <>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </>
  );
}

export default App;
