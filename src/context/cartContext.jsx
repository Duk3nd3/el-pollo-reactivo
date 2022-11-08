import { createContext, useContext, useEffect, useState } from "react";

export const cartContext = createContext();

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("EPC-Carrito")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("EPC-Carrito", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (nuevoMenu) => {
    const menuExiste = cart.find((item) => item.id === nuevoMenu.id);

    menuExiste
      ? setCart(
          cart.map((menu) => {
            if (menu.id === nuevoMenu.id) {
              if (nuevoMenu.ingredientePrincipal === "empanadas") {
                let obj3 = {};
                const obj1 = menu.guarnicion;
                const obj2 = nuevoMenu.guarnicion;
                Object.keys(nuevoMenu.guarnicion).map((key) => {
                  obj3[key] = obj1[key] + obj2[key];
                });
                return {
                  ...menu,
                  guarnicion: { ...obj3 },
                };
              } else {
                return {
                  ...menu,
                  cantidad: menu.cantidad + nuevoMenu.cantidad,
                };
              }
            } else {
              return menu;
            }
          })
        )
      : setCart([...cart, nuevoMenu]);
  };

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const clearCart = () => setCart([]);

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
