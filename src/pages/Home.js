import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import GameDeatil from "../components/GameDetail";
import Game from "../components/Game";
// Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Router
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Pagination
import ReactPaginate from "react-paginate";

function Home() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );
  // Pagination upcoming
  const [upcomingpageNumber, setUpcomingPageNumber] = useState(0);
  const perPage = 9;
  const pageVisited = upcomingpageNumber * perPage;

  const PageCount = (gameList) => {
    return Math.ceil(gameList.length / perPage);
  };

  const changePage = ({ selected }) => {
    setUpcomingPageNumber(selected);
  };
  const displayItems = upcoming
    .slice(pageVisited, pageVisited + perPage)
    .map((game) => {
      return <Game game={game} key={game.id} />;
    });
  // Pagination popular
  const [popularPageNumber, setPopularPageNumber] = useState(0);
  const popularPageVisited = popularPageNumber * perPage;

  const popularChangePage = ({ selected }) => {
    setPopularPageNumber(selected);
  };
  const popularDisplayItems = popular
    .slice(popularPageVisited, popularPageVisited + perPage)
    .map((game) => {
      return <Game game={game} key={game.id} />;
    });
  // Pagination newGames
  const [newGamesPageNumber, setNewGamesPageNumber] = useState(0);
  const newGamesPageVisited = newGamesPageNumber * perPage;

  const newGamesChangePage = ({ selected }) => {
    setNewGamesPageNumber(selected);
  };
  const newGamesDisplayItems = newGames
    .slice(newGamesPageVisited, newGamesPageVisited + perPage)
    .map((game) => {
      return <Game game={game} key={game.id} />;
    });
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDeatil pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <Games>
            {searched.map((game) => (
              <Game game={game} key={game.id} />
            ))}
          </Games>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>{displayItems}</Games>
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={PageCount(upcoming)}
          onPageChange={changePage}
          containerClassName="pagination"
          previousLinkClassName="page-prev"
          nextLinkClassName="page-next"
          disabledClassName="pagination-disabled"
          activeClassName="active-page"
          pageLinkClassName="page-number"
        />
        <h2>Popular Games</h2>
        <Games>{popularDisplayItems}</Games>
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={PageCount(popular)}
          onPageChange={popularChangePage}
          containerClassName="pagination"
          previousLinkClassName="page-prev"
          nextLinkClassName="page-next"
          disabledClassName="pagination-disabled"
          activeClassName="active-page"
          pageLinkClassName="page-number"
        />
        <h2>New Games</h2>
        <Games>{newGamesDisplayItems}</Games>
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={PageCount(newGames)}
          onPageChange={newGamesChangePage}
          containerClassName="pagination"
          previousLinkClassName="page-prev"
          nextLinkClassName="page-next"
          disabledClassName="pagination-disabled"
          activeClassName="active-page"
          pageLinkClassName="page-number"
        />
      </AnimateSharedLayout>
    </GameList>
  );
}
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media screen and (max-width: 400px) {
    padding: 0rem 2rem;
  }
  h2 {
    padding: 5rem 0rem;
    @media screen and (max-width: 400px) {
      padding: 5rem 1rem;
    }
  }
`;
const Games = styled(motion.div)`
  /* min-height: 80vh; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
