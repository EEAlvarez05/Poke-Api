import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  //   Función para obtener los Pokémon
  const getPokemon = async () => {
    try {
      const pokemonArray = [];
      for (let i = 1; i <= 151; i++) {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + i);
        pokemonArray.push(res.data);
      }
      setPokemon(pokemonArray);
    } catch (error) {
      console.error("Error al obtener los Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  //   Busqueda de pokemon
  const filteredBySearch = searchQuery
    ? pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : pokemon;

  return (
    <PokemonContext.Provider value={{ pokemon, loading, filteredBySearch, setSearchQuery }}>
      {children}
    </PokemonContext.Provider>
  );
};
