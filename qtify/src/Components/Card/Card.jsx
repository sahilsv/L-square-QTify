import React from "react";
import Chip from "@mui/material/Chip";
// import picture from "../../Assets/picture.png";
import "./card.css";

const Card = ({album}) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={album.image} alt={album.slug} />
        <div className="chip-container">
          <Chip
            className="chip"
            label={`${album.follows} Follows`}
            sx={{
              "& .MuiChip-label": {
                padding: "0px 8px", 
              },
            }}
          />
        </div>
        <div className="title">{album.title}</div>
      </div>
    </>
  );
};

export default Card;
