import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(true);

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

  // Funcion para obtener los detalles del pokemon
  const getPokemonDetails = async (name) => {
    setDetailsLoading(true);
    setPokemonDetails(null);
    try {
      const [pokemonRes, speciesRes] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
      ]);

      const entries = speciesRes.data.flavor_text_entries.filter((entry) => entry.language.name === "en");
      const description = entries[10]

      const data = {
        ...pokemonRes.data,
        description
      }

      setPokemonDetails(data);
    } catch (error) {
      console.error("Error al obtener los detalles del Pokémon:", error);
    } finally {
      setDetailsLoading(false);
    }
  };

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
        pokemonDetails,
        detailsLoading,
        getPokemonDetails,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
