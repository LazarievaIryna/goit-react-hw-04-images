// const API_KEY = '29839947-203cd2765f14246beba1c6e54';
// const BASE_URL =
//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';

// export const fetchImage = query => {
//   return fetch(`${BASE_URL}q=${query}&page=1&key=${API_KEY}`).then(response => {
//     return response.json();
//   });
// };
import axios from 'axios';
export const getFetch = async (request, page) => {
  const params = new URLSearchParams({
    key: '29839947-203cd2765f14246beba1c6e54',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
  });
  const base_URL = `https://pixabay.com/api/?${params}`;
  try {
    const response = await axios.get(base_URL);
    return response.data.hits;
    // console.log(response.data.hits);
  } catch (error) {
    return error;
  }
};
