import axios from "axios";

const instance = axios.create({
  baseURL: " https://linces-voley-sales-back.onrender.com/api", // https://linces-voley-sales-back.onrender.com/api --- http://localhost:8080/api
  withCredentials: true,
});

export default instance;
