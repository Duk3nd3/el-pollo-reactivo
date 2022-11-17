import Plato from "../Plato";

const TartasCard = ({ sabor }) => {
  const cambiarNombreDeSabor = (sabor) => {
    return sabor === "jamon"
      ? "jamon y queso"
      : sabor === "jamonCompleta"
      ? "jamon y queso completa"
      : sabor;
  };

  return (
    <li className="flex flex-col items-center">
      <div>
        <Plato
          imagen={
            <img
              src={`/img/tarta de ${cambiarNombreDeSabor(sabor)}.jpg`}
              alt={`tarta de ${cambiarNombreDeSabor(sabor)}`}
            />
          }
          nombre={cambiarNombreDeSabor(sabor)}
        />
      </div>
      <h3 className="font-semibold capitalize">
        {cambiarNombreDeSabor(sabor)}
      </h3>
    </li>
  );
};

export default TartasCard;
