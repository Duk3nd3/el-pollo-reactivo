const Cantidad = ({ contador, setContador }) => {
	const handleClick = (e) => {
		if (e.target.innerHTML === '+') {
			setContador(contador + 1);
		} else if (contador > 0) {
			setContador(contador - 1);
		}
	};

	return (
		<>
			<div className='bg-zinc-700 order border-zinc-500 shadow-md shadow-zinc-700 my-2 w-fit mx-auto text-l'>
				<button
					onClick={handleClick}
					className='bg-orange-300 font-bold w-8 py-1'
				>
					-
				</button>
				<input
					type='text'
					value={contador}
					readOnly
					className='w-10 text-center bg-zinc-700 text-white'
				/>
				<button
					onClick={handleClick}
					className='bg-orange-300 font-bold w-8 py-1'
				>
					+
				</button>
			</div>
		</>
	);
};

export default Cantidad;
