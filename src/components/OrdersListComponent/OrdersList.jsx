import React from "react";

import "./OrdersList.css";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import { useAuth } from "../../context/AuthContext";

export default function OrdersList({ orders, dozen_price, half_dozen_price }) {
  const { user } = useAuth();

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
          element.dozensAmount * dozen_price +
          element.halfDozensAmount * half_dozen_price;
        return (
          <div className="order__container" key={index}>
            <div className="order__index">
              <p>{index + 1}</p>
            </div>
            <div className="order__client-name">
              <p>{element.client}</p>
            </div>
            <div className="order__dozens">
              <p>{element.dozensAmount}</p>
            </div>
            <div className="order__half-dozens">
              <p>{element.halfDozensAmount}</p>
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
