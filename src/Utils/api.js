import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const getProductsByCategory = async (category) => {
  const { data } = await axios.get(`${API_URL}/category/${category}`);
  return data;
};
