const initState = {
  detail: {},
  screenshots: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screenshots: action.payload.screenshots,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
