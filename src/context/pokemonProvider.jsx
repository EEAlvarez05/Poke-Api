import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([25]);
    return (
        <PokemonContext.Provider value={{pokemons, setPokemons}}>
            {children}
        </PokemonContext.Provider>
    );
}