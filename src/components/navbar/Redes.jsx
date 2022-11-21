import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Redes = () => {
  return (
    <div className="pt-16">
      <p className="uppercase mb-2 tracking-wide text-orange-600 text-center font-bold text-sm">
        Seguinos En Nuestras Redes
      </p>
      <div className="flex items-center justify-evenly mx-auto py-4">
        <div className="rounded-full bg-white hover:bg-blue-600 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-110 ease-in duration-200">
          <FaFacebook size="20px" />
        </div>
        <div className="rounded-full bg-white hover:bg-red-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-110 ease-in duration-200">
          <AiFillInstagram size="20px" />
        </div>
        <div className="rounded-full bg-white hover:bg-sky-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-110 ease-in duration-200">
          <FaTwitter size="20px" />
        </div>
        <div className="rounded-full bg-white hover:bg-red-600 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-110 ease-in duration-200">
          <FaYoutube size="20px" />
        </div>
      </div>
    </div>
  );
};

export default Redes;
