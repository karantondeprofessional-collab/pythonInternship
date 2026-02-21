import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/chains";

export const getChains = () => axios.get(API_BASE_URL);

export const addChain = (chain) => axios.post(API_BASE_URL, chain);

export const updateChain = (id, chain) =>
  axios.put(`${API_BASE_URL}/${id}`, chain);

export const deleteChain = (id) =>
  axios.delete(`${API_BASE_URL}/${id}`);
