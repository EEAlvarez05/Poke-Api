import typeColors from "./typeColors.js";
import statsNames from "./statsNames.js";
function infoPokemon(poke) {
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
    abilities: poke.moves.slice(0, 2).map((a) => {
      const name =
        a.move.name.charAt(0).toUpperCase() +
        a.move.name.slice(1).toLowerCase();
      return { name };
    }),
    description:
      poke.description.flavor_text.replace(/\n|\f/g, " ") || "No description",
    stats: poke.stats.map((s) => {
      const name = statsNames[s.stat.name];
      const value = s.base_stat.toString().padStart(3, "0");
      return { name, value };
    }),
    evolution: poke.evolution.map((m) => {
      const name =
        m.name.charAt(0).toUpperCase() + m.name.slice(1).toLowerCase();
      const image = m.image;
      const minLevel = m.minLevel;
      const item = m.item
        ? m.item.charAt(0).toUpperCase() + m.item.slice(1).toLowerCase()
        : null;
      return { name, image, minLevel, item };
    }),
  };
}

export default infoPokemon;
