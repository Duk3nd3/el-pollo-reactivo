import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const ProductCard = ({ producto }) => {
  const dispatch = useDispatch();
  const cambiarNombreDeSabor = (sabor) => {
    return sabor === "jamon"
      ? "jamon y queso"
      : sabor === "jamonCompleta"
      ? "jamon y queso completa"
      : sabor;
  };

  return (
    <div className="bg-red-200 p-2">
      <p className="capitalize">{producto?.ingredientePrincipal}</p>

      {producto.ingredientePrincipal === "empanadas" ||
      producto.ingredientePrincipal === "tartas"
        ? Object.keys(producto?.guarnicion).map((key, i) => {
            if (producto.guarnicion[key] !== 0) {
              return (
                <p key={i}>
                  <span className="capitalize">
                    {cambiarNombreDeSabor(key)}:{" "}
                  </span>
                  <span>{producto.guarnicion[key]}</span>
                </p>
              );
            }
          })
        : producto.guarnicion && <p>{producto.guarnicion}</p>}

      {producto.cantidad === 0.25 ? (
        <p>Cantidad: 1/4 pollo</p>
      ) : producto.cantidad === 0.5 ? (
        <p>Cantidad: 1/2 pollo</p>
      ) : producto.ingredientePrincipal === "carne a la parrilla" ? (
        <p>Cantidad: {producto.cantidad} Kg</p>
      ) : (
        <p>Cantidad: {producto.cantidad}</p>
      )}

      <p>Precio: {producto.precio * producto.cantidad}$</p>

      <button
        onClick={() => dispatch(removeFromCart(producto.id))}
        className="bg-red-600 text-white font-semibold p-1 rounded-md"
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProductCard;
