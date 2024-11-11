import axios from "axios";

const instance = axios.create({
  baseURL: "https://linces-voley-sales-back.onrender.com/api",
  withCredentials: true,
});

export default instance;
