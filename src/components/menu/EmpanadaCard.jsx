import Plato from "./Plato";

const EmpanadaCard = ({ sabor }) => {
  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={
            <img
              src={`/img/empanada de ${sabor}.jpg`}
              alt={`empanada de ${sabor}`}
            />
          }
          nombre={sabor}
        />
      </div>
      <h3 className="font-semibold capitalize">{sabor}</h3>
    </li>
  );
};

export default EmpanadaCard;
