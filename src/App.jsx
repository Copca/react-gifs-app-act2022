import { useState } from 'react';

import { Formulario, GifGrid } from './components';

function App() {
	const [categorias, setCategorias] = useState(['Top Cat']);

	const onNuevaCategoria = nuevaCategoria => {
		// Valida que no haya categorias repetidas
		if (categorias.includes(nuevaCategoria)) return;

		setCategorias([nuevaCategoria, ...categorias]);
	};

	return (
		<div className='container py-8'>
			<h1 className='text-3xl font-bold mb-10'>GifExpertApp</h1>

			<Formulario onNuevaCategoria={onNuevaCategoria} />

			<div className='mt-4'>
				{categorias.map(categoria => (
					<GifGrid key={categoria} categoria={categoria} />
				))}
			</div>
		</div>
	);
}

export default App;
