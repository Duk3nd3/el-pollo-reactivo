import Plato from "../Plato";
import PorcionPollo from "./PorcionPollo";

const Pollo = () => {
  return (
    <div className="max-w-[90%] xl:max-w-[80%] m-auto text-center flex flex-col items-center">
      <h3 className="font-bold text-red-600 text-xl sm:text-2xl xl:text-4xl pb-10 tracking-widest text-center">
        Pollo a la parrilla
      </h3>
      <div className="flex items-center justify-center gap-5 mb-10">
        <Plato
          imagen={
            <img
              src={"/img/pollo a la parrilla.jpg"}
              alt={"pollo a la parrilla"}
            />
          }
          nombre={"pollo a la parrilla"}
        />
        <PorcionPollo />
      </div>
    </div>
  );
};

export default Pollo;
