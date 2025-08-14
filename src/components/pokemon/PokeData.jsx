import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import formatPokemon from "../../utils/pokeHelpers";
import PokeDataCard from "./PokeDataCard";

function PokeData() {
  const { pokemonDetails } = useContext(PokemonContext);
  const formatted = formatPokemon(pokemonDetails);

  return (
    <div className="flex p-1 gap-2 sx:gap-4 md:gap-8 lg:gap-10">
      <PokeDataCard data={"Height"}>
        <div className="flex gap-2">
          <p>H</p>
          <p>{formatted.height} m</p>
        </div>
      </PokeDataCard>
      <PokeDataCard data={"Height"}>
        <div className="flex gap-2">
          <p>W</p>
          <p>{formatted.weight} kg</p>
        </div>
      </PokeDataCard>
      <PokeDataCard data={"Abilities"}>
        <div className="flex flex-col gap-2">
            {formatted.abilities.map((a) => (
              <p key={a.name}>{a.name}</p>
            ))}
        </div>
      </PokeDataCard>
    </div>
  );
}

export default PokeData;
