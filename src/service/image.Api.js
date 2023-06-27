
import  axios  from "axios";
 const  API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: { 'Authorization': API_KEY },
  params: {
  orientation: 'landscape',
  per_page: 15,
}
});

export const getImages = async (query, page) => {
  const { data } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
}