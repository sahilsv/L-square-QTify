import React from "react";
import Hero from "../Components/Hero/Hero";
import Section from "../Components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

const Homepage = (props) => {
  const data = useOutletContext();
  const { newAlbums, topAlbums } = data.data;
  // console.log(newAlbums);

  return (
    <>
      <StyledEngineProvider>
        <Hero />
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </StyledEngineProvider>
    </>
  );
};

export default Homepage;
