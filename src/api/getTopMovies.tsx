import axios from "axios";

const topMovieIds = [
  "tt5253352",
  "tt0954542",
  "tt3758172",
  "tt0278731",
  "tt0473445",
  "tt1905041",
  "tt7935784",
  "tt0110357",
  "tt8294536",
  "tt0220204",
];

const topMoviesInfo = topMovieIds.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=c1dd6993`)
);

export default topMoviesInfo;
