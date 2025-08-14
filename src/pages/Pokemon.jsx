import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import PokeHeader from "../components/pokemon/PokeHeader.jsx";
import PokeMainContent from "../components/pokemon/PokeMainContent.jsx";
import Loader from "../components/common/Loader.jsx";
import { PokemonContext } from "../context/pokemonProvider.jsx";

function Pokemon() {
  const { name } = useParams();
  const { getPokemonDetails, detailsLoading, pokemonDetails } =
    useContext(PokemonContext);

  useEffect(() => {
    if (!name) return;
    getPokemonDetails(name);
  }, [name]);

  const isPokemonReady = !detailsLoading && pokemonDetails?.name;

  return (
    <div
      className="h-screen w-screen overflow-x-hidden relative flex flex-col px-2 sx:px-4 md:px-24 lg:px-32"
      id="pokeColor"
      style={{ backgroundImage: !isPokemonReady ? "none" : undefined }}
    >
      {!isPokemonReady ? (
        <Loader className="h-screen w-full" />
      ) : (
        <>
          <PokeHeader />
          <PokeMainContent />
        </>
      )}
    </div>
  );
}

export default Pokemon;
