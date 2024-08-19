import axios from 'axios';

const BASE_URL = 'https://www.atg.se/services/racinginfo/v1/api';

export const getProducts = async (betType: string) => {
  const response = await axios.get(`${BASE_URL}/products/${betType}`);
  return response.data;
};

export const getGameDetails = async (gameId: string) => {
  const response = await axios.get(`${BASE_URL}/games/${gameId}`);
  return response.data;
};