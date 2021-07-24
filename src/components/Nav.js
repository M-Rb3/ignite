import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import { loadSearch } from "../actions/searchAction";
import { fadeIn } from "../animation";
const Nav = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    const gameSearched = document.getElementById("search").value;
    dispatch(loadSearch(gameSearched.toLowerCase()));
    document.getElementById("search").value = "";
  };
  const clearHandler = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <SyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input id="search" type="text" />
        <button type="submit" onClick={searchHandler}>
          Search
        </button>
      </form>
    </SyledNav>
  );
};
export default Nav;

const SyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  @media screen and (max-width: 400px) {
    padding: 3rem 1rem;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 750px) {
      width: 60%;
      display: inline-block !important;
    }
    @media screen and (max-width: 515px) {
      width: 60%;
    }
    @media screen and (max-width: 430px) {
      width: 50%;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    @media screen and (max-width: 515px) {
      padding: 0.5rem 1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
