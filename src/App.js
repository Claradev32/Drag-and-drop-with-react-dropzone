import React, { useCallback, useState } from 'react';
import ShowImage from './ShowImage';

import DropBox from './DropBox';

function App() {
	const [images, setImages] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.map((file, index) => {
			const reader = new FileReader();

			reader.onload = function (e) {
				setImages((prevState) => [
					...prevState,
					{ id: index, src: e.target.result },
				]);
			};

			reader.readAsDataURL(file);
			return file;
		});
	}, []);

	return (
		<div className="App">
			<DropBox onDrop={onDrop} />
			<ShowImage images={images} />
		</div>
	);
}

export default App;
