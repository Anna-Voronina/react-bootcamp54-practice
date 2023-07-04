import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
const API_KEY = '1';
const BASE_URL_RANDOM =
  'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const apiBase = axios.create({ baseURL: BASE_URL });

const urls = Array.from({ length: 12 }, () => BASE_URL_RANDOM);

export const getTrendingCocktails = () => {
  return Promise.all(
    urls.map(async url => {
      const { data } = await axios.get(url);

      return data;
    })
  );
};
export const getFilteredCocktails = async q => {
  const { data } = await apiBase.get(`/search.php?s=${q}`);
  return data;
};
