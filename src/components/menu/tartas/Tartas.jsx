import React from "react";
import { useMenu } from "../../../context/menuContext";
import SubmitCarritoButton from "../SubmitCarritoButton";
import ListaTartas from "./ListaTartas";

const Tartas = () => {
  const { menu, handleSubmit } = useMenu();

  return (
    <div className="h-screen max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col items-center gap-5">
      <ListaTartas />
      <SubmitCarritoButton
        handleSubmit={handleSubmit}
        disabled={menu.cantidad > 0 ? false : true}
      />
    </div>
  );
};

export default Tartas;
