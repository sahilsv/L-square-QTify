import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Section from "./Components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
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
  })

  const {topAlbums = [], newAlbums = []} = data;

  return (
    <div className="App">
      <Navbar />
      <Outlet context={{data: {topAlbums, newAlbums}}} />
    </div>
  );
}

export default App;
