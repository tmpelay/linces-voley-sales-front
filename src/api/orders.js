import axios from "./axios.js";

export const ordersRequest = () => axios.get("/orders");
export const createOrderRequest = (order) => axios.post("/orders", order);
