import { useMenu } from "../../context/menuContext";
import GuarnicionCard from "./GuarnicionCard";

const ListaGuarniciones = ({ handleGuarnicionSeleccionada }) => {
  const { guarniciones } = useMenu();

  return (
    <>
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-20 xl:pt-10 tracking-widest text-center">
        Elige una guarnicion
      </h3>
      <ul className="flex justify-center flex-wrap gap-2 sm:gap-3 lg:gap-4 xl:gap-5 pb-10">
        {guarniciones?.map((guarnicion, i) => (
          <GuarnicionCard
            guarnicion={guarnicion}
            handleGuarnicionSeleccionada={handleGuarnicionSeleccionada}
            key={guarnicion.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ListaGuarniciones;
