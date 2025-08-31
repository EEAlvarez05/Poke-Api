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

      // Obtener la descripción
      const entries = speciesRes.data.flavor_text_entries.filter(
        (entry) => entry.language.name === "en"
      );
      const description = entries[10];

      // Obtener la evolución
      const evolutionUrl = speciesRes.data.evolution_chain.url;
      const evolutionRes = await axios.get(evolutionUrl);
      const evolutionChain = evolutionRes.data.chain;

      // Funcion para recorrer la cadena de evoluccion
      const getEvolution = async (node, evolvesFrom = null) => {
        let evoData = [];

        // Chequear generacion
        const speciesInfo = await axios.get(node.species.url);
        const isGen1 = speciesInfo.data.generation.name === "generation-i";

        // Datos basicos
        if (isGen1) {
          const pokeRes = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${node.species.name}`
          );

          // Detalles de evolucion
          const evolutionDetails = node.evolution_details?.[0] || {};
          const minLevel = evolutionDetails.min_level ?? null;
          const item = evolutionDetails.item?.name ?? null;

          // Agregar a la lista
          evoData.push({
            name: node.species.name,
            image: pokeRes.data.sprites.other["official-artwork"].front_default,
            minLevel,
            item,
            evolvesFrom,
          });

          // Recorrer todas las posibles evoluciones
          for (let next of node.evolves_to) {
            evoData.push(...(await getEvolution(next, node.species.name)));
          }
        } else {
          for (const next of node.evolves_to) {
            evoData.push(...(await getEvolution(next, evolvesFrom)));
          }
        }

        return evoData;
      };

      const evolution = await getEvolution(evolutionChain);

      const data = {
        ...pokemonRes.data,
        description,
        evolution,
      };

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
