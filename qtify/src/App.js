import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Section from "./Components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters } from "./api/api";
import { Outlet } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    // generateData("filter", fetchFilters);
  })

  const {topAlbums = [], newAlbums = [], songs = []} = data;

  return (
    <div className="App">
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums, songs}}} />
    </div>
  );
}

export default App;
