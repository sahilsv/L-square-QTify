import React from "react";
import Hero from "../Components/Hero/Hero";
import Section from "../Components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { fetchFilters } from "../api/api";

const Homepage = (props) => {
  const data = useOutletContext();
  const { newAlbums, topAlbums, songs } = data.data;
  // console.log(newAlbums);

  return (
    <>
      <StyledEngineProvider>
        <Hero />
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} filterSource={fetchFilters} type="song" />
      </StyledEngineProvider>
    </>
  );
};

export default Homepage;
