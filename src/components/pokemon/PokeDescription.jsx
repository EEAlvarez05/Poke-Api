import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import infoPokemon from "../../utils/pokeInfo";

function PokeDescription() {
    const { pokemonDetails } = useContext(PokemonContext);
    const info = infoPokemon(pokemonDetails);

    return ( 
        <p className="w-4/5 md:w-2/3 lg:w-1/2 text-center">
            {info.description}
        </p>
     );
}

export default PokeDescription;