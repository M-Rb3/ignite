const base_url = "https://api.rawg.io/api/";

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

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => {
  return base_url + popularGames;
};
