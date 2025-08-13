import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Función para obtener los Pokémon
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

  // Busqueda de pokemon
  const filteredBySearch = searchQuery
    ? pokemon.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.id.toString().padStart(3, "0").includes(searchQuery)
      )
    : pokemon;

  // Filtro por tipo
  const filteredByType = typeFilter
    ? filteredBySearch.filter((p) =>
        p.types.some((t) => t.type.name === typeFilter)
      )
    : filteredBySearch;

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        loading,
        filteredBySearch,
        setSearchQuery,
        filteredByType,
        typeFilter,
        setTypeFilter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
