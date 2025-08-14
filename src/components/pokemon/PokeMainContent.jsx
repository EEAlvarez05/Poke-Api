import { useContext, useEffect } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import typeColors from "../../utils/typeColors";
import hexToRGBA from "../../utils/hexToRGBA";

function PokeMainContent() {
  const { pokemonDetails } = useContext(PokemonContext);

  const mainColor = typeColors[pokemonDetails.types[0].type.name];
  const transparentColor = hexToRGBA(mainColor, 0.4);
  const pokeBackground = hexToRGBA(mainColor, 0.2);

  useEffect(() => {
    const bg = document.getElementById("pokeColor");
    if (bg) {
      const gradient = `linear-gradient(to top right, ${pokeBackground}, transparent)`;
      bg.style.backgroundImage = gradient;
    }
  }, []);

  return (
    <main className="bg-white/10 flex flex-col items-center gap-8 py-11 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg" style={{
        backgroundImage: `linear-gradient(to top right, ${transparentColor}, transparent)`,
      }}>
      PokeMainContent
    </main>
  );
}

export default PokeMainContent;
