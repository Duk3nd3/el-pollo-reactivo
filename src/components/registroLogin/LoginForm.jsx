import { useState } from "react";
import { useAuth } from "../../hooks/authContext";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

import Mensaje from "../Mensaje";

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [tipoError, setTipoError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = ({ target: { name, value } }) =>
    setUserLogin({ ...userLogin, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userLogin.email, userLogin.password);
    try {
      await login(userLogin.email, userLogin.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setMensaje("Correo no encontrado");
      }
      if (error.code === "auth/wrong-password") {
        setMensaje("Contraseña incorrecta");
      }
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
        <FaRegEnvelope className="text-red-500 mx-2" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          value={userLogin.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full my-1 bg-zinc-100 flex items-center rounded-md px-1">
        <MdLockOutline className="text-red-500 mx-2" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-zinc-100 outline-none text-sm py-3 w-full ml-1"
          required={true}
          value={userLogin.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-around w-full py-3">
        <label className="text-xs text-zinc-500  flex items-center ">
          <input
            type="checkbox"
            name="remember"
            className="mr-1 cursor-pointer"
          />
          Recordar Sesión
        </label>
        <Link to="/password">
          <p className="text-xs text-zinc-500">Olvnameaste tu contraseña?</p>
        </Link>
      </div>

      {tipoError !== "" && <Mensaje mensaje={mensaje} tipoError={tipoError} />}

      <button className="mt-10 mb-7 px-16 py-3 text-xs text-white font-semibold border-2 border-red-600 bg-red-600 rounded-full hover:bg-transparent hover:text-black ease-in duration-200 tracking-widest uppercase shadow-sm shadow-zinc-500">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
