import React from "react";
import { useAuth } from "../../hooks/authContext";

const UserMenu = () => {
  const { logout } = useAuth();

  return (
    <div className="bg-zinc-600 w-[150px] absolute top-11 -left-[50%] ring-1 ring-zinc-700 rounded-b-md">
      <ul className="">
        <li className="w-full border-zinc-800 text-center cursor-pointer hover:text-orange-200">
          Perfil
        </li>
        <li
          onClick={() => logout()}
          className="w-full border-t border-zinc-800 text-center cursor-pointer hover:text-orange-200"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
