import typeColors from "./typeColors.js";
function formatPokemon(poke) {
  const nameC = poke.types[0].type.name;
  const color = typeColors[nameC];
  return {
    name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1).toLowerCase(),
    id: poke.id.toString().padStart(3, "0"),
    image: poke.sprites.other["official-artwork"].front_default,
    // types: poke.types.map((t) => {
    //   const rawName = t.type.name;
    //   const displayName =
    //     rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
    //   const color = typeColors[rawName];
    //   return { rawName, name: displayName, color };
    // }),
    type: {
      name: nameC,
      color,
    }
  };
}

export default formatPokemon;
