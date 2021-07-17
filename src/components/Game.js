import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { popup } from "../animation";
const Game = ({ game }) => {
  const stringID = game.id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.id));
    document.body.style.overflow = "hidden";
    console.log(typeof stringID);
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringID}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${game.id}`}>
        <h3 layoutId={`title ${stringID}`}>{game.name}</h3>
        <p>{game.released}</p>
        <motion.img
          layoutId={`image ${stringID}`}
          src={game.background_image}
          alt={game.name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  visibility: visible !important;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    visibility: visible !important;
  }
`;
export default Game;
