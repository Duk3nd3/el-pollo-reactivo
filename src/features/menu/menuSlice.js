import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientePrincipal: "",
  guarnicion: "",
  cantidad: 0,
  precio: 0,
  id: "",
  preparacionSeleccionada: "",
  ingredienteSeleccionado: "",
  tipoDeMenuSeleccionado: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addIngredientePrincipal: (state, action) => {
      return { ...state, ingredientePrincipal: action.payload };
    },
    addGuarnicion: (state, action) => {
      return { ...state, guarnicion: action.payload };
    },
    addCantidad: (state, action) => {
      return { ...state, cantidad: action.payload };
    },
    addPrecio: (state, action) => {
      return { ...state, precio: action.payload };
    },
    addId: (state, action) => {
      return { ...state, id: action.payload };
    },
    addPreparacionSeleccionada: (state, action) => {
      return { ...state, preparacionSeleccionada: action.payload };
    },
    addIngredienteSeleccionado: (state, action) => {
      return { ...state, ingredienteSeleccionado: action.payload };
    },
    addTipoDeMenuSeleccionado: (state, action) => {
      return { ...state, tipoDeMenuSeleccionado: action.payload };
    },

    resetMenu: () => {
      return initialState;
    },
  },
});

export const {
  addIngredientePrincipal,
  addGuarnicion,
  addCantidad,
  addPrecio,
  addId,
  resetMenu,
  addPreparacionSeleccionada,
  addIngredienteSeleccionado,
  addTipoDeMenuSeleccionado,
} = menuSlice.actions;

export default menuSlice.reducer;
