import ProductCard from "../components/carritoCompras/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../features/cart/cartSlice";

const CarritoCompras = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length === 0 || cart === undefined ? (
        <div className="w-full h-screen flex flex-col justify-center items-center text-xl font-semibold">
          <p className="">Aún no tienes productos en tu carrito</p>{" "}
          <p className="">
            Has click{" "}
            <a className="text-red-600 font-black" href="/menu">
              aqui
            </a>{" "}
            para agregar comidas{" "}
          </p>
        </div>
      ) : (
        <div className="pt-[240px] max-w-[95%] mx-auto xl:max-w-[80%]">
          <h2 className="text-3xl text-red-600 font-semibold text-center">
            Carrito De Compras
          </h2>
          <div className="w-full py-10 px-5 bg-zinc-200 mt-10">
            <h3 className="text-start text-xl font-semibold text-orange-500 ">
              Tus Productos
            </h3>
            <ul className="bg-orange-200 px-2 py-2">
              {cart?.map((producto, index) => {
                return (
                  <li className="w-fit py-2" key={index}>
                    <ProductCard producto={producto} />
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => dispatch(resetCart([]))}
            className="bg-red-600 p-1 text-white font-semibold rounded-md"
          >
            Eliminar carrito
          </button>
        </div>
      )}
    </>
  );
};

export default CarritoCompras;
