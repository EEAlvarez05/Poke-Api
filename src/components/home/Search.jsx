import Searching from "./Searching";
import { useRef, useState, useContext, useEffect } from "react";
import { PokemonContext } from "../../context/pokemonProvider";
import { useLocation } from "react-router-dom";

function Search() {
  const { setSearchQuery } = useContext(PokemonContext);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const desktopInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const location = useLocation();

  // Funcion para manejar el cambio en el input de busqueda
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchValue(e.target.value);
  };

  // Funcion para manejar el focus del input de busqueda
  const handleFocus = () => {
    if (window.innerWidth >= 768) {
      desktopInputRef.current.focus();
    } else {
      setSearch(!search);
      mobileInputRef.current.focus();
    }
  };

  // Funcion para manejar el back en mobile
  const handleBack = () => {
    setSearch(!search);
    setSearchValue("");
    setSearchQuery("");
  };

  // Resetear búsqueda al cambiar de ruta
  useEffect(() => {
    setSearchQuery("");
    setSearchValue("");
  }, [location, setSearchQuery]);

  return (
    <div className="flex items-center justify-center md:w-full">
      <div
        className="flex gap-4 md:border-2 md:border-white p-1 md:w-4/5 cursor-pointer items-center"
        onClick={handleFocus}
      >
        <i className="fa-solid fa-magnifying-glass icon hover:scale-110 transition duration-300 ease-in-out"></i>
        <Searching
          className="w-full hidden md:block"
          ref={desktopInputRef}
          onChange={handleChange}
          value={searchValue}
        />
      </div>
      <div
        className={
          "bg-primary p-5 flex items-center gap-5 absolute top-0 left-0 h-full w-full z-40 md:hidden transform transition duration-300 ease-in-out " +
          (search ? "-translate-0" : "-translate-y-full")
        }
      >
        <i
          className="fa-solid fa-caret-left text-2xl cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          onClick={handleBack}
        ></i>
        <Searching
          className="border-2 border-white p-1 w-11/12"
          ref={mobileInputRef}
          onChange={handleChange}
          value={searchValue}
        />
      </div>
    </div>
  );
}

export default Search;
