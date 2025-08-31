import { Link } from "react-router-dom";
import { useContext } from "react";
import pokeball from "../../assets/images/pokeball.svg";
import { PokemonContext } from "../../context/pokemonProvider";
import infoPokemon from "../../utils/pokeInfo";

function PokeHeader() {
  const { pokemonDetails } = useContext(PokemonContext);
  const info = infoPokemon(pokemonDetails);

  return (
    <header className="flex flex-col items-center px-5 pt-5 gap-5 relative">
      <div className="flex items-center justify-start gap-16 lg:gap-28 w-full">
        <div className="flex items-center justify-start gap-4">
          <Link to={"/"}>
            <i className="fa-solid fa-arrow-left mt-1 icon hover:scale-120 transition duration-300 ease-in-out"></i>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">
            {info.name}
          </h1>
          <img
            src={pokeball}
            alt="Imagen de pokeball"
            className="size-7 md:mt-1"
          />
        </div>
        <p className="text-2xl md:text-3xl font-bold">#{info.id}</p>
      </div>
      <div className="size-[200px] relative top-11">
        <img
          src={info.image}
          alt={"imagen de " + info.name}
          className="block z-10 relative hover:scale-105 transition duration-500 ease-in-out"
        />
      </div>
      <img
        src={pokeball}
        alt="imagen de pokeball"
        className="absolute -bottom-10 size-56 opacity-5"
      />
    </header>
  );
}

export default PokeHeader;
