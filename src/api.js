const base_url = `https://api.rawg.io/api/games`;

const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return "0" + month;
  } else {
    return month;
  }
};
const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return "0" + day;
  } else {
    return day;
  }
};

const currnetYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();
const currentDate = `${currnetYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currnetYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currnetYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const newGames = `?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-relasedg&page_size=10`;
const upcomingGames = `?key=${process.env.REACT_APP_RAWG_API}&dates=${currnetYear},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesUrl = () => {
  return base_url + popularGames;
};
export const newGamesUrl = () => {
  return base_url + newGames;
};
export const upcomingGamesURL = () => {
  return base_url + upcomingGames;
};

export const gameDetailURL = (game_id) => {
  return `${base_url}/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
};
export const imgDetailURL = (game_id) => {
  return `${base_url}/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
};
