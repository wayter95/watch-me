import { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

interface IContextProps {
	selectedGenreId: number
	setSelectedGenreId: Dispatch<SetStateAction<number>>
}

const GenreIdContext = createContext<IContextProps>({ selectedGenreId: 1, setSelectedGenreId: () => { } })

export default GenreIdContext