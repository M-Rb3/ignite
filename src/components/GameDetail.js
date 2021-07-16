import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import linux from "../img/linux.svg";
import pc from "../img/windows.svg";
import android from "../img/android.svg";
import xbox_s from "../img/Xbox_Series.svg";
// Star Image
import starEmpty from "../img/star-empty.png";
import StarFull from "../img/star-full.png";

const GameDeatil = ({ pathId }) => {
  const history = useHistory();
  console.log(typeof pathId);
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // GET platforms Images
  const getPlaform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox_s;
      case "Nintendo Switch":
        return nintendo;
      case "macOS":
        return apple;
      case "iOS":
        return apple;
      case "PC":
        return pc;
      case "Linux":
        return linux;
      case "Android":
        return android;
      default:
        return gamepad;
    }
  };

  const getStar = () => {
    const star = [];
    const rating = Math.floor(detail.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<img src={StarFull} alt="star" key={i} />);
      } else {
        star.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return star;
  };
  const { detail, screenshots, isLoading } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {detail.name}
                </motion.h3>
                <p>Rating: {detail.rating}</p>
                {getStar()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {detail.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlaform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={detail.background_image}
                alt={detail.name}
              />
            </Media>
            <Description>
              <p>{detail.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((img) => (
                <img src={img.image} alt="game_screenshots" key={img.id} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
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
  z-index: 5;
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-self: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2.5rem;
    width: 4rem;

    height: 3rem !important;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  /* margin: 0rem 2.5rem; */
`;
export default GameDeatil;
