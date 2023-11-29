import React from "react";
import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";
import styles from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={styles.card}>
                <img className={styles.cardImg} src={image} alt={slug} />
                <div className={styles.chipContainer}>
                  <Chip
                    className={styles.chip}
                    label={`${follows} Follows`}
                    sx={{
                      "& .MuiChip-label": {
                        padding: "0px 8px",
                      },
                    }}
                  />
                </div>
                <div className={styles.title}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }

      case "song": {
        const { image, title, likes } = data;

        return (
          <div className={styles.card}>
            <img className={styles.cardImg} src={image} alt={title} />
            <div className={styles.chipContainer}>
              <Chip
                className={styles.chip}
                label={`${likes} Follows`}
                size="small"
                sx={{
                  "& .MuiChip-label": {
                    padding: "0px 8px",
                  },
                }}
              />
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
