import { useMenu } from "../../context/menuContext";
import ListaEmpanadas from "./ListaEmpanadas";
import SubmitCarritoButton from "./SubmitCarritoButton";

const Empanadas = () => {
  const { menu, handleSubmit } = useMenu();

  return (
    <div className="h-screen max-w-[95%] xl:max-w-[80%] mx-auto flex flex-col items-center gap-5">
      <ListaEmpanadas />
      <SubmitCarritoButton
        handleSubmit={handleSubmit}
        disabled={menu.cantidad > 0 ? false : true}
      />
    </div>
  );
};

export default Empanadas;
