import axios from "./axios.js";

export const ordersRequest = (userId) =>
  axios.get("/orders", { params: { userId: userId } });
export const createOrderRequest = (order) => axios.post("/orders", order);
