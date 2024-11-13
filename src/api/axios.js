import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api", // https://linces-voley-sales-back.onrender.com/api
  withCredentials: true,
});

export default instance;
