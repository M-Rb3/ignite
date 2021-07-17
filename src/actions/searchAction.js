import { searchGameURL } from "../api";
import axios from "axios";
export const loadSearch = (searched) => async (dispatch) => {
  const data = await axios.get(searchGameURL(searched));
  dispatch({
    type: "SEARCH_RESULTS",
    payload: { data: data.data.results },
  });
};
