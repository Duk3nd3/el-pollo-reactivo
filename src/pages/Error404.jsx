import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../public/img/error_404.png';

const Error404 = () => {
	return (
		<div className='w-full h-screen bg-yellow-100 flex justify-center items-center font-bold uppdercase'>
			<strong className='absolute bottom-18 mr-5'>ERROR 404</strong>
			<img className='object-center' src={error404} />
			<Link
				className='absolute bottom-20 bg-transparent hover:bg-orange-300 text-black-700 font-semibold hover:text-white w-100 mr-14 py-2 px-4 border border-orange-500 hover:border-transparent rounded'
				to='/'
			>
				VOLVER A HOME
			</Link>
		</div>
	);
};

export default Error404;
