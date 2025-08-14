import typeColors from "./typeColors.js";
function formatPokemon(poke) {
  return {
    name: poke.name.charAt(0).toUpperCase() + poke.name.slice(1).toLowerCase(),
    id: poke.id.toString().padStart(3, "0"),
    image: poke.sprites.other["official-artwork"].front_default,
    types: poke.types.map((t) => {
      const rawName = t.type.name;
      const displayName =
        rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
      const color = typeColors[rawName];
      return { rawName, name: displayName, color };
    }),
    height: poke.height / 10,
    weight: poke.weight / 10,
    abilities: poke.moves.slice(0, 2).map((a)=>{
      const name = a.move.name.charAt(0).toUpperCase() + a.move.name.slice(1).toLowerCase();
      return {name}
    })
  };
}

export default formatPokemon;
