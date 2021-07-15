import axios from "axios";
import { gameDetailURL, imgDetailURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detail = await axios.get(gameDetailURL(id));
  const img = await axios.get(imgDetailURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detail.data,
      screenshots: img.data,
    },
  });
};

export const loadImages = (id) => async (dispatch) => {
  const detail = await axios.get(gameDetailURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detail.data,
    },
  });
};
