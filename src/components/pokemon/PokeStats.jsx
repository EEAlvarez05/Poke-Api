import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import infoPokemon from "../../utils/pokeInfo";
import typeColors from "../../utils/typeColors";
import hexToRGBA from "../../utils/hexToRGBA";
import PokeStatsCard from "./PokeStatsCard";

function PokeStats() {
  const { pokemonDetails } = useContext(PokemonContext);
 const info = infoPokemon(pokemonDetails);

  const mainColor = typeColors[pokemonDetails.types[0].type.name];
  const transparentColor = hexToRGBA(mainColor, 0.4);
  return (
    <div className="flex flex-col gap-3">
      {info.stats.map((s) => (
        <PokeStatsCard
          key={s.name}
          stat={s.name}
          value={s.value}
          color={mainColor}
          transparent={transparentColor}
        />
      ))}
    </div>
  );
}

export default PokeStats;
