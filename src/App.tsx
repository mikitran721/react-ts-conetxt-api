import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleThemBtn from "./Components/ToggleThemBtn";
import MovieContextProvider from "./contexts/MovieContext";
import Movies from "./Components/Movies";

function App() {
  return (
    <>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleThemBtn />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </>
  );
}

export default App;
