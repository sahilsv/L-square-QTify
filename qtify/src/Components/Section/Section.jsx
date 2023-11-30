import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

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

        {showFilters && (
          <div className={styles.filterWrapper}>
            <Filters
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>
        )}

        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {cardsToRender.map((item) => (
                  <Card data={item} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={cardsToRender}
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
