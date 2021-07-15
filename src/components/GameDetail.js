import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { gameDetailURL } from "../api";

const GameDeatil = () => {
  const { detail, screenshots } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{detail.name}</h3>
            <p>Rating: {detail.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {detail.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={detail.background_image} alt={detail.name} />
        </div>
        <div className="description">
          <p>{detail.description}</p>
        </div>
        <div className="gallery">
          {screenshots.results.map((img) => (
            <img src={img.image} alt="game_screenshots" key={img.id} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDeatil;
