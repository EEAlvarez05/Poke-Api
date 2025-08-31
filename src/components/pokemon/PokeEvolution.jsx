import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import infoPokemon from "../../utils/pokeInfo";
import PokeEvolutionCard from "./PokeEvolutionCard";

function PokeEvolution() {
  const { pokemonDetails } = useContext(PokemonContext);

  const info = infoPokemon(pokemonDetails);
  const isEevee = info.evolution[0].name.toLowerCase() === "eevee";
  console.log(info.evolution[0].name);
  
  if (isEevee) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center">
        <PokeEvolutionCard image={info.evolution[0].image} name={info.evolution[0].name} />
        <div className="flex gap-2 sx:gap-4 md:gap-8 lg:gap-10">
          {info.evolution.slice(1).map((evo) => (
            <div className="flex flex-col items-center justify-center p-2 gap-2 md:gap-4">
              <i className="fa-solid fa-arrow-down"></i>
              {/* Condición de evolución */}
              {evo.item ? (
                <p className="text-xs sx:text-sm">Use {evo.item}</p>
              ) : evo.minLevel ? (
                <p className="text-xs sx:text-sm">Lvl {evo.minLevel}</p>
              ) : null}
              <PokeEvolutionCard
                key={evo.name}
                image={evo.image}
                name={evo.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <PokeEvolutionCard image={info.evolution[0].image} name={info.evolution[0].name} />
      <div className="flex flex-col gap-2 sx:gap-4">
        {info.evolution.slice(1).map((evo) => (
          <div className="flex flex-col items-center p-1 gap-2 md:gap-4">
            <i className="fa-solid fa-arrow-down"></i>
            {/* Condición de evolución */}
            {evo.item ? (
              <p className="text-xs sx:text-sm">Use {evo.item}</p>
            ) : evo.minLevel ? (
              <p className="text-xs sx:text-sm">Lvl {evo.minLevel}</p>
            ) : null}
            <PokeEvolutionCard
              key={evo.name}
              image={evo.image}
              name={evo.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokeEvolution;
