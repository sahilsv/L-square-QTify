import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  // const [albums, setAlbum] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  // console.log(data);

  return (
    <>
      <div className={styles.section}>
        <div className={styles.header}>
          <h3 className={styles.albumHeading}>{title}</h3>
          <button onClick={handleToggle} className={styles.toggleText}>
            {!carouselToggle ? "Collapse" : "Show all"}
          </button>
        </div>

        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {data.map((item) => (
                  <Card data={item} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={data}
                renderComponent={(ele) => <Card data={ele} type={type} />}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Section;
