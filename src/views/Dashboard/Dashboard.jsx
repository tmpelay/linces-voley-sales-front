import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import { useForm } from "react-hook-form";
import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import OrdersList from "../../components/OrdersListComponent/OrdersList";
import { salesRequest } from "../../api/sales.js";
import { createOrderRequest } from "../../api/orders.js";
import { useAuth } from "../../context/AuthContext.jsx";
import ReactModal from "react-modal";

export default function Dashboard() {
  const { user } = useAuth();
  const [sale, setSale] = useState([]);

  const getSale = async () => {
    const res = await salesRequest();
    setSale(res.data[res.data.length - 1]);
  };

  useEffect(() => {
    getSale();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.dozens == "") {
      data.dozens = 0;
    }

    if (data.halfdozens == "") {
      data.halfdozens = 0;
    }

    const newOrder = {
      client_name: data.clientname,
      dozens_amount: parseInt(data.dozens),
      half_dozens_amount: parseInt(data.halfdozens),
      sale_id: sale.id,
      user_id: user.id,
    };

    createOrderRequest(newOrder);
  });

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  if (sale) {
    if (sale.active) {
      return (
        <div className="dashboard__container">
          <ReactModal isOpen={modalOpen} onRequestClose={closeModal}>
            <form onSubmit={onSubmit} className="orders__form">
              <InputComponent
                id={"clientname"}
                name={"clientname"}
                type={"text"}
                placeholder={"Cliente"}
                register={register("clientname", {
                  required: {
                    value: true,
                    message: "El nombre del cliente es requerido",
                  },
                })}
                error={!errors.clientname}
              />
              <InputComponent
                id={"dozens"}
                name={"dozens"}
                type={"number"}
                placeholder={"Docenas"}
                register={register("dozens", {
                  min: 0,
                  message: "Debe ingresar una cantidad positiva",
                })}
                error={!errors.dozens}
              />
              <InputComponent
                id={"halfdozens"}
                name={"halfdozens"}
                type={"number"}
                placeholder={"Medias Docenas"}
                register={register("halfdozens", {
                  min: 0,
                  message: "Debe ingresar una cantidad positiva",
                })}
                error={!errors.halfdozens}
              />
              <div className="form__button">
                <ButtonComponent label={"Nueva orden"} />
              </div>
            </form>
          </ReactModal>
          <div className="dashboard__header">
            <h1 className="dashboard__welcome">Bienvenido, Adriel Garcia!</h1>
            <ButtonComponent label={"Nueva orden"} onClick={openModal} />
          </div>
          <OrdersList
            dozen_price={sale.dozen_price}
            half_dozen_price={sale.half_dozen_price}
          />
        </div>
      );
    }
  }

  return <div>No hay ventas</div>;
}
