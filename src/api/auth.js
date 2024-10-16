import axios from "./axios.js";

export const loginRequest = (user) => axios.post("/login", user);
export const verifyTokenRequest = () => axios.get("/verify-token");
export const logoutRequest = () => axios.post("/logout");
