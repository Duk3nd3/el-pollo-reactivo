import { createSlice } from "@reduxjs/toolkit";

const initialCart = JSON.parse(localStorage.getItem("EPC-Carrito")) ?? [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const menuExiste = state.find((menu) => menu.id === action.payload);
      if (menuExiste) {
        state.map((menu) => {
          if (menu.id === action.payload.id) {
            if (
              action.payload.ingredientePrincipal === "empanadas" ||
              action.payload.ingredientePrincipal === "tartas"
            ) {
              let obj3 = {};
              const obj1 = menu.guarnicion;
              const obj2 = action.payload.guarnicion;
              Object.keys(action.payload.guarnicion).map((key) => {
                obj3[key] = obj1[key] + obj2[key];
              });
              return {
                ...menu,
                guarnicion: { ...obj3 },
                cantidad: Object.values(obj3).reduce(
                  (previousValue, currentValue) => previousValue + currentValue,
                  0
                ),
              };
            } else {
              return {
                ...menu,
                cantidad: menu.cantidad + action.payload.cantidad,
              };
            }
          } else {
            return menu;
          }
        });
      } else {
        state.push(action.payload);
      }
      localStorage.setItem("EPC-Carrito", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const menuExiste = state.find((menu) => menu.id === action.payload);
      if (menuExiste) {
        state.splice(state.indexOf(menuExiste), 1);
      }
      localStorage.setItem("EPC-Carrito", JSON.stringify(state));
      console.log(state.menu);
    },

    resetCart: () => {
      if (window.confirm("Estas seguro que queres eliminar el carrito?")) {
        localStorage.setItem("EPC-Carrito", JSON.stringify([]));
        return [];
      }
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
