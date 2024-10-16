import React, { useEffect } from "react";

import { useAuth } from "./../../context/AuthContext.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import lincesLogo from "./../../assets/logo.svg";

import "./Login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    signin(data);
  });

  return (
    <div className="login__container">
      <img src={lincesLogo} alt="" className="login__logo" />
      <form onSubmit={onSubmit} className="login__form">
        <InputComponent
          id="username"
          name="username"
          type="text"
          placeholder="Nombre de Usuario"
          register={register("username", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido",
            },
          })}
          error={!errors.username}
        />
        <InputComponent
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña"
          register={register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
          })}
          error={!errors.password}
        />
        <div className="form__button">
          <ButtonComponent label={"Ingresar"} />
        </div>
      </form>
    </div>
  );
}
