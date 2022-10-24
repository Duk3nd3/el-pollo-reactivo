import React from "react";

const Mensaje = ({ mensaje, tipoError }) => {
  return (
    <>
      {tipoError === "error" ? (
        <p className="bg-red-600 w-full py-2 text-white font-semibold rounded-md text-center my-2 text-md shadow-sm shadow-red-900">
          {mensaje}
        </p>
      ) : (
        <p className="bg-green-600 w-full py-2 text-white font-semibold rounded-md text-center my-2 text-md shadow-sm shadow-green-900">
          {mensaje}
        </p>
      )}
    </>
  );
};

export default Mensaje;
