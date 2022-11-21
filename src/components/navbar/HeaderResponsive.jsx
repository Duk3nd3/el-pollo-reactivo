import { AiOutlineClose } from "react-icons/ai";

const HeaderResponsive = ({ handleNav }) => {
  return (
    <div className="w-full mx-auto h-[128px] bg-gradient-to-t from-orange-300 to-yellow-200 border-b-4 border-zinc-600 flex justify-between">
      <div className="md:hidden hover:scale-105 ease-in duration-300 cursor-pointer flex items-center pl-2">
        <img
          src="/img/el pollo comilon.png"
          alt="header El Pollo Comilon"
          className=""
        />
      </div>

      <div className="md:hidden hover:scale-105 ease-in duration-300 cursor-pointer flex items-center">
        <img
          src="/img/polloAIzq.png"
          alt="header El Pollo Comilon"
          className="hover:scale-105 ease-in duration-300 cursor-pointer"
        />
      </div>
      <div
        onClick={handleNav}
        className="w-fit h-fit rounded-full text-xl bg-white shadow-md shadow-gray-800 p-1.5 cursor-pointer text-red-600 mt-2 mr-2"
      >
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default HeaderResponsive;
