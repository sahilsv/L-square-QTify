import React, { useEffect, useState } from "react";
import axios from "axios";
import "./section.css";
import Card from "../Card/Card";

const Section = () => {
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/top`
    );
    setAlbum(response.data);
    console.log(response.data);
  };

  return (
    <>
      <div className="section-div">
        <div className="section-heading">
          {/* <span className="album-div">
            <h3 className="album-heading">Top Albums</h3>
          </span>
          <span className="collapse-div">
            <h3 className="collapse-heading">Collapse</h3>
          </span> */}
          <p className="album-heading">Top Albums</p>
          <p className="collapse-heading">Collapse</p>
        </div>

        <div className="container">
          {albums.map((album) => {
            return (
              <div className="item" key={album.id}>
                <Card album={album} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
