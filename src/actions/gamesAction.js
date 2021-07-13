import axios from "axios";
import { popularGamesUrl, upcomingGamesURL, newGamesUrl } from "../api";

export const loadGames = () => async (dispatch) => {
  const popular = await axios.get(popularGamesUrl());
  const upcoming = await axios.get(upcomingGamesURL());
  const newGames = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popular.data.results,
      upcoming: upcoming.data.results,
      newGames: newGames.data.results,
    },
  });
};
