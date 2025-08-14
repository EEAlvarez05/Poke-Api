import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import infoPokemon from "../../utils/pokeInfo";
import typeColors from "../../utils/typeColors";

function PokeTypes() {
  const { pokemonDetails } = useContext(PokemonContext);
  const info = infoPokemon(pokemonDetails);

  return (
    <div className="flex gap-4">
      {info.types.map((t) => (
        <p
          key={t.rawName}
          className="py-1 px-5 rounded-full text-black"
          style={{ background: typeColors[t.rawName] }}
        >
          {t.name}
        </p>
      ))}
    </div>
  );
}

export default PokeTypes;
