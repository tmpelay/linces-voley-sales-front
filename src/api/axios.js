import axios from "axios";

const instance = axios.create({
  baseURL: "https://linces-voley-sales-back-production.up.railway.app/api", // https://linces-voley-sales-back-production.up.railway.app/api --- http://localhost:8080/api
  withCredentials: true,
});

export default instance;
