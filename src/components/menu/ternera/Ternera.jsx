import Plato from "../Plato";
import PesoTernera from "./PesoTernera";

const Ternera = () => {
  return (
    <div className="max-w-[90%] xl:max-w-[80%] m-auto text-center">
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-10 tracking-widest text-center">
        Carne a la parrilla x Kg
      </h3>
      <div className="flex items-center justify-center gap-5 mb-10">
        <div className="flex flex-col items-center">
          <Plato
            imagen={
              <img
                src={"/img/carne a la parrilla.jpg"}
                alt={"carne a la parrilla"}
              />
            }
            nombre={"carne a la parrilla"}
          />
        </div>
        <PesoTernera />
      </div>
    </div>
  );
};

export default Ternera;
