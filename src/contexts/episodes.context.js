import { createContext, useContext, useState } from 'react'

const EpisodesContext = createContext([])

export const EpisodesProvider = ({ children }) => {
    const [allEpisodes, setAllEpisodes] = useState([])

    return (
        <EpisodesContext.Provider
            value={{
                allEpisodes, setAllEpisodes
            }}
        >
            {children}
        </EpisodesContext.Provider>
    )
}

export const useEpisodeNames = () => useContext(EpisodesContext)