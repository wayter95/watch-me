import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import GenreIdContext from './contexts/genre-id';

import './styles/global.scss';
import { useState } from 'react';

export function App() {
	const [selectedGenreId, setSelectedGenreId] = useState(1)

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<GenreIdContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
				<SideBar />
				<Content />
			</GenreIdContext.Provider>
		</div>
	)
}