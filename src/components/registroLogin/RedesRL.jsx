import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const RedesRL = () => {
  return (
    <div className="flex justify-center gap-x-6">
      <Link to="/registro">
        <div className="text-white rounded-full bg-blue-600 shadow-md shadow-zinc-400 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-black hover:bg-transparent hover:text-blue-600">
          <FaFacebook size="20px" />
        </div>
      </Link>
      <Link to="/registro">
        <div className="text-white rounded-full bg-blue-500 shadow-md shadow-zinc-400 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-black hover:bg-transparent hover:text-blue-500">
          <FaLinkedinIn size="20px" />
        </div>
      </Link>
      <Link to="/registro">
        <div className="text-white rounded-full bg-red-600 shadow-md shadow-zinc-400 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-black hover:bg-transparent hover:text-red-600">
          <FaGoogle size="20px" />
        </div>
      </Link>
    </div>
  );
};

export default RedesRL;
