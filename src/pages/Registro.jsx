import { useState } from "react";
import Mensaje from "../components/Mensaje";
import RedesRL from "../components/registroLogin/RedesRL";
import RegisterForm from "../components/registroLogin/RegisterForm";
import ImagenRegistro from "../components/registroLogin/ImagenRegistro";

export default function Registro() {
  const [tipoError, setTipoError] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="w-full h-screen pt-[180px] flex items-center ">
      <main className="max-w-[95%] w-[850px] m-auto flex justify-center text-center rounded-md md:shadow-md md:shadow-zinc-500">
        <div className="w-full md:w-1/2 max-w-[425px] mx-auto bg-white py-10 flex justify-center items-center rounded-md md:rounded-l-md md:rounded-none shadow-md shadow-zinc-500 md:shadow-none">
          <form className="w-full px-9 py-1">
            <h2 className="text-2xl font-semibold pt-3 pb-5 ">
              Créa tu Cuenta
            </h2>
            {tipoError !== "" && (
              <div className="my-5">
                <Mensaje mensaje={mensaje} tipoError={tipoError} />
              </div>
            )}
            <RegisterForm />

            <p className="text-zinc-500 pb-3">o regístrate con</p>
            <RedesRL />
          </form>
        </div>

        <div className="hidden md:w-1/2 bg-gradient-to-t from-orange-300 to-yellow-200 md:flex justify-center items-center px-9 rounded-md md:rounded-r-md md:rounded-none">
          <ImagenRegistro />
        </div>
      </main>
    </div>
  );
}
