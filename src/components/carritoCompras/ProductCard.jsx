import { useCart } from "../../context/cartContext";

const ProductCard = ({ producto }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="bg-red-200 p-2">
      <p>{producto.ingredientePrincipal}</p>
      {producto.guarnicion && <p>{producto.guarnicion}</p>}

      <p>Precio: {producto.precio * producto.cantidad}</p>
      <p>Cantidad: {producto.cantidad}</p>
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
