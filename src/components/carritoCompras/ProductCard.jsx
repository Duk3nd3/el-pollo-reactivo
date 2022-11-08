import { useCart } from "../../context/cartContext";
const ProductCard = ({ producto }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="bg-red-200 p-2">
      <p className="capitalize">{producto?.ingredientePrincipal}</p>

      {producto.ingredientePrincipal === "empanadas"
        ? Object.keys(producto?.guarnicion).map((key, i) => {
            if (producto.guarnicion[key] !== 0) {
              return (
                <p key={i}>
                  <span className="capitalize">
                    {key === "jamon" ? "jamon y queso" : key}:{" "}
                  </span>
                  <span>{producto.guarnicion[key]}</span>
                </p>
              );
            }
          })
        : producto.guarnicion && <p>{producto.guarnicion}</p>}
      {producto.ingredientePrincipal !== "empanadas" && (
        <p>Cantidad: {producto.cantidad}</p>
      )}
      <p>Precio: {producto.precio * producto.cantidad}$</p>

      <button
        onClick={() => removeFromCart(producto.id)}
        className="bg-red-600 text-white font-semibold p-1 rounded-md"
      >
        Eliminar
      </button>
    </div>
  );
};

export default ProductCard;
