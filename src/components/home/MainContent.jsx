import Card from "./Card";
import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import Loader from "../common/Loader";
import formatedPokemon from "../../utils/pokeHelpers";

function MainContent() {
  const { pokemon, loading } = useContext(PokemonContext);

  return (
    <main className="mx-2 mb-2 sx:mx-4 sx:mb-4 md:mx-6 md:mb-6 overflow-y-auto h-full main">
      {/* Loading mientras carga la API */}
      {loading ? (
        <Loader className="h-full w-full" />
      ) : (
        // Si hay respuesta de la API, se muestran los cards
        <div className="grid grid-cols-[repeat(2,150px)] md:grid-cols-[repeat(3,150px)] lg:grid-cols-[repeat(4,170px)] gap-8 justify-center py-4">
            {pokemon.map((poke)=>{
                const formatted = formatedPokemon(poke)
                return(
                    <Card
                    key={formatted.id}
                    image={formatted.image}
                    name={formatted.name}
                    id={formatted.id}
                    type={formatted.types[0].rawName}
                  />
                )
            })}
        </div>
      )}
    </main>
  );
}

export default MainContent;
