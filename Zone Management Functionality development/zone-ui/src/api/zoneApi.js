import axios from "axios";

const BASE_URL = "http://localhost:8080/api/zones";

export const getZones = () => axios.get(BASE_URL);
export const createZone = (zone) => axios.post(BASE_URL, zone);
export const deleteZone = (id) => axios.delete(`${BASE_URL}/${id}`);
export const toggleStatus = (id,status) => axios.put(`${BASE_URL}/${id}/${status}`);
