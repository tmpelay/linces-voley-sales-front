import React, { useEffect, useState } from "react";

import "./OrdersList.css";
import { ordersRequest } from "../../api/orders";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

export default function OrdersList({ dozen_price, half_dozen_price }) {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const res = await ordersRequest();
    setOrders(res.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orders-list__container">
      <div className="orders-list__header">
        <div className="order__index"></div>
        <div className="order__client-name">
          <p>Cliente</p>
        </div>
        <div className="order__dozens">
          <p>Docenas</p>
        </div>
        <div className="order__half-dozens">
          <p>Medias docenas</p>
        </div>
        <div className="order__price">
          <p>Precio</p>
        </div>
        <div className="order__more"></div>
      </div>
      {orders.map((element, index) => {
        const total_prize =
          element.dozens_amount * dozen_price +
          element.half_dozens_amount * half_dozen_price;
        return (
          <div className="order__container" key={index}>
            <div className="order__index">
              <p>{index + 1}</p>
            </div>
            <div className="order__client-name">
              <p>{element.client_name}</p>
            </div>
            <div className="order__dozens">
              <p>{element.dozens_amount}</p>
            </div>
            <div className="order__half-dozens">
              <p>{element.half_dozens_amount}</p>
            </div>
            <div className="order__price">
              <p>${total_prize}</p>
            </div>
            <div className="order__more">
              <Icon className="icon" path={mdiDotsVertical} size={1} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
