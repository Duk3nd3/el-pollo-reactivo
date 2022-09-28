import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
<<<<<<< HEAD
	return (
		<div className='fixed w-full h-[120px] bg-gradient-to-t from-orange-300 ia-yellow-500 to-yellow-200 py-1'>
			<Link href='/'>
				<div className='flex justify-center'>
					<img
						src='/img/pollo-comilon-header.png'
						alt='header El Pollo Comilon'
						width={750}
						className='hover:scale-105 ease-in duration-150 cursor-pointer'
					/>
				</div>
			</Link>

			<div className='py-3 shadow-sm hadow-gray-800 bg-zinc-500 text-white border-double border-y-4 border-orange-300'>
				<ul className='text-2xl flex justify-evenly font-semibold max-w-[85%] mx-auto'>
					<Link href='/'>
						<li className='cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100'>
							Inicio
						</li>
					</Link>
					<Link href='/'>
						<li className='cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100'>
							Menu
						</li>
					</Link>
					<Link href='/'>
						<li className='cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100'>
							Nosotros
						</li>
					</Link>
					<Link href='/'>
						<li className='cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100'>
							Contacto
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
=======
  return (
    <div className="fixed w-full h-[124px] bg-gradient-to-t from-orange-300 ia-yellow-500 to-yellow-200 py-1">
      <Link href="/">
        <div className="flex justify-center">
          <img
            src="/img/pollo-comilon-header.png"
            alt="header El Pollo Comilon"
            width={750}
            className="hover:scale-105 ease-in duration-150 cursor-pointer pb-1"
          />
        </div>
      </Link>

      <div className="py-2.5 shadow-sm hadow-gray-800 bg-zinc-600 text-white border-double border-y-4 border-orange-300">
        <ul className="text-2xl flex justify-evenly font-semibold max-w-[85%] mx-auto">
          <Link to="/">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Inicio
            </li>
          </Link>
          <Link to="/menu">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Menu
            </li>
          </Link>
          <Link to="/nosotros">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Nosotros
            </li>
          </Link>
          <Link to="/contacto">
            <li className="cursor-pointer hover:-rotate-3 hover:scale-105 ease-in duration-100">
              Contacto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
>>>>>>> 09988435600ef9fc656fb6225bf8d8bcbf484b08
};

export default Navbar;
