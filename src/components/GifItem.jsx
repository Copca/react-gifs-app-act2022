export const GifItem = ({ imagen }) => {
	const { titulo, url } = imagen;

	return (
		<div className='bg-white shadow shadow-slate-400 rounded p-2'>
			<img src={url} alt={`Imagen ${titulo}`} className='h-52 w-full ' />

			<p className='text-center p-1'>{titulo}</p>
		</div>
	);
};
