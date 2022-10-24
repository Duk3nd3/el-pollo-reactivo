import React, { useState } from "react";
import { useAuth } from "../../hooks/authContext";
import { useNavigate } from "react-router-dom";
import Mensaje from "../Mensaje";

import { FaRegEnvelope, FaUser } from "react-icons/fa";
import { MdLockOutline, MdLock, MdAddLocationAlt } from "react-icons/md";

const RegisterForm = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    direccion: "",
    password: "",
    passwordConfirm: "",
  });

  const [tipoError, setTipoError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password === user.passwordConfirm) {
      try {
        await signup(user);
        setMensaje("Registro exitoso");
        setTipoError("ok");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        // console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setMensaje("El correo ya esta en uso");
        }
        if (error.code === "auth/invalid-email") {
          setMensaje("El correo es invalido");
        }
        setTipoError("error");
      }
    } else {
      setMensaje("Las contraseñas no coinciden");
      setTipoError("error");
    }
    setTimeout(() => {
      setTipoError("");
    }, 3500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center text-zinc-800"
    >
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <FaUser className="text-red-500 mx-2" />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de usuario"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          value={user.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <FaRegEnvelope className="text-red-500 mx-2" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <MdAddLocationAlt className="text-red-500 mx-2" />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          value={user.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <MdLockOutline className="text-red-500 mx-2" />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          minLength={6}
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <MdLock className="text-red-500 mx-2" />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirmar contraseña"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          minLength={6}
          value={user.passwordConfirm}
          onChange={handleChange}
        />
      </div>
      {tipoError !== "" && <Mensaje mensaje={mensaje} tipoError={tipoError} />}

      <button className="mt-10 mb-7 px-16 py-3 text-xs text-white font-semibold border-2 border-red-600 bg-red-600 rounded-full hover:bg-transparent hover:text-black ease-in duration-200 tracking-widest uppercase shadow-sm shadow-zinc-500">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
