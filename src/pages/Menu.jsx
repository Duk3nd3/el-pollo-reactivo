import React from "react";
import MenuCard from "../components/menu/MenuCard";

const carta = [
  {
    imagen: "/img/canelones.jpg",
    titulo: "canelones",
    precio: 900,
    ingredientes: ["carne", "cebolla", "morron", "acelga", "salsa a elección"],
  },
  {
    imagen: "/img/pollo portuguesa.jpg",
    titulo: "1/4 de pollo a la portuguesa + guarnicion",
    precio: 900,
    ingredientes: ["pollo", "salsa portuguesa", "guarnicion a elección"],
  },
  {
    imagen: "/img/milanesa completa.jpg",
    titulo: "milanesa completa",
    precio: 900,
    ingredientes: ["corte de ternera o pollo", "huevo frito", "papas fritas"],
  },
  {
    imagen: "/img/ñoquis.jpg",
    titulo: "ñoquis",
    precio: 900,
    ingredientes: ["ñoquis de papa", "salsa a elección"],
  },
  {
    imagen: "/img/ravioles.jpg",
    titulo: "ravioles",
    precio: 900,
    ingredientes: ["ravioles a elección", "salsa a elección"],
  },
  // {
  //   imagen: "",
  //   titulo: "tallarines",
  //   precio: 900,
  //   ingredientes: "tallarines, salsa a elección",
  // },
  {
    imagen: "/img/lasagna.jpg",
    titulo: "lasagna",
    precio: 900,
    ingredientes: ["verdura o jamon y queso", "salsa a elección"],
  },
  {
    imagen: "/img/churrasco.jpg",
    titulo: "churrasco + guarnicion",
    precio: 1000,
    ingredientes: ["corte de ternera", "guarnicion a elección"],
  },
  // {
  //   imagen: "",
  //   titulo: "milanesa de pollo con omelette",
  //   precio: 900,
  //   ingredientes:
  //     "suprema de pollo empanada, omelette de jamon y queso o verdura",
  // },
  // {
  //   imagen: "",
  //   titulo: "1/4 de pollo + guarnicion",
  //   precio: 900,
  //   ingredientes: "pollo, guarnicion a elección",
  // },
  {
    imagen: "/img/paste de papa.jpg",
    titulo: "pastel de papa",
    precio: 900,
    ingredientes: ["carne picada", "papa", "queso", "cremoso"],
  },
  // {
  //   imagen: "",
  //   titulo: "carne a la parrilla u horno",
  //   precio: 900,
  //   ingredientes: "corte de ternera",
  // },
  {
    imagen: "/img/pollo pastora.jpg",
    titulo: "pollo pastora + guarnición",
    precio: 900,
    ingredientes: [
      "pollo",
      "jamon",
      "queso",
      "tomate",
      "guarnicion a elección",
    ],
  },
  // {
  //   imagen: "",
  //   titulo: "sandwich de hamburguesa",
  //   precio: 700,
  //   ingredientes: "carne de ternera, jamon, queso, tomate, lechuga, mayonesa",
  // },
  // {
  //   imagen: "",
  //   titulo: "milanesa a la napolitana con puré",
  //   precio: 900,
  //   ingredientes: "corte de ternera o pollo, salsa napolitana, papa",
  // },
  // {
  //   imagen: "",
  //   titulo: "milanesa a la suiza con guarnición",
  //   precio: 900,
  //   ingredientes:
  //     "corte de ternera o pollo, jamon, queso, guarnicion a elección",
  // },
  // {
  //   imagen: "",
  //   titulo: "hamburguesa con papas fritas",
  //   precio: 900,
  //   ingredientes: "carne de ternera, papas fritas",
  // },
  // {
  //   imagen: "",
  //   titulo: "albondigas con arroz",
  //   precio: 900,
  //   ingredientes: "carne de ternera, arroz",
  // },
  // {
  //   imagen: "",
  //   titulo: "milanesa de queso con ensalada",
  //   precio: 900,
  //   ingredientes: "queso, ensalada a elección",
  // },
  {
    imagen: "/img/pescado.jpg",
    titulo: "pescado al horno + guarnición",
    precio: 900,
    ingredientes: ["filet de pescado", "guernicion a elección"],
  },
];

const Menu = () => {
  return (
    <div className="w-full h-screen pt-[220px]">
      <ul className="max-w-[85%] mx-auto flex justify-center flex-wrap gap-5">
        {carta.map((item, i) => (
          <MenuCard item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
