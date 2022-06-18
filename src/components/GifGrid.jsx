import useFetchGifs from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ categoria }) => {
	const { imagenes, isLoading } = useFetchGifs(categoria);

	return (
		<div className='mb-12'>
			<h3 className='text-2xl font-bold mb-1'>{categoria}</h3>

			{isLoading && <h2>Cargando...</h2>}

			<div className='grid md:grid-cols-3 gap-8 '>
				{imagenes.map(imagen => (
					<GifItem key={imagen.id} imagen={imagen} />
				))}
			</div>
		</div>
	);
};
