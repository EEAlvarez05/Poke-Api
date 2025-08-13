import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import typeColors from "../../utils/typeColors";
import { useLocation } from "react-router-dom";

function Filter() {
  const { setTypeFilter } = useContext(PokemonContext);
  const [filter, setFilter] = useState(false);
  const types = Object.keys(typeColors);
  const location = useLocation();

  //   Funcion para manejar el click en el icono de filtro
  const handleClick = (type) => {
    setFilter(!filter);
    setTypeFilter(type);
  };

  // Función para manejar el overflow
  useEffect(() => {
    const mainPoke = document.getElementsByClassName("main")[0];

    if (filter) {
      mainPoke.style.overflow = "hidden";
      mainPoke.style.filter = "blur(5px)";
      mainPoke.style.transition = "filter 0.3s ease";
    } else {
      mainPoke.style.overflow = "auto";
      mainPoke.style.filter = "blur(0px)";
    }
  });

  //  Resetear filtro al cambiar de ruta
  useEffect(() => {
    setTypeFilter("");
  }, [location, setTypeFilter]);

  return (
    <div>
      <div className="flex gap-2 items-center cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
        <i
          className="fa-solid fa-filter icon"
          onClick={() => setFilter(!filter)}
        ></i>
      </div>
      <div
        className={
          "w-3/5 sx:w-2/4 overflow-auto bg-accent p-3 flex flex-wrap gap-2.5 absolute top-full right-0 z-20" +
          (filter ? "" : " hidden")
        }
      >
        <p
          className="px-3.5 py-1 rounded-2xl cursor-pointer bg-secondary hover:scale-110 transition duration-300 ease-in-out"
          onClick={() => handleClick("")}
        >
          All
        </p>
        {types.map((type) => (
          <p
            className="px-3.5 py-1 cursor-pointer rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
            key={type}
            onClick={() => handleClick(type)}
            style={{ backgroundColor: typeColors[type] }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Filter;
