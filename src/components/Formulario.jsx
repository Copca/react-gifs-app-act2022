import { useState } from 'react';

export const Formulario = ({ onNuevaCategoria }) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		// Validación del input
		if ([inputValue.trim()].includes('')) return;

		onNuevaCategoria(inputValue);

		// Reset inputValue
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-sm flex items-center space-x-4'>
			<input
				type='text'
				className='w-full rounded p-2 placeholder:text-slate-300'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>

			<input
				type='submit'
				className='btn bg-sky-500 hover:bg-sky-600'
				value='Buscar'
			/>
		</form>
	);
};
