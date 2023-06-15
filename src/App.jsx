import { useState } from 'react';
import FormularioJB from './components/FormularioJB';
import { GetDeckProvider } from './context/GetDeckContext';
import ImagenJB from './components/ImagenJB';

function App() {
	const [nombre, setNombre] = useState('');

	return (
		<div>
			<GetDeckProvider>
				<FormularioJB nombre={nombre} setNombre={setNombre}></FormularioJB>
				<ImagenJB></ImagenJB>
			</GetDeckProvider>
		</div>
	);
}

export default App;
