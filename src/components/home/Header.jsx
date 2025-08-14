import pokeball from "../../assets/images/pokeball.svg";
import Search from "./Search";
import Filter from "./Filter";
function Header() {
    return ( 
        <header className="mx-4 md:mx-6 flex gap-3 p-5 relative">
            <div className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-105">
                <h1 className="text-2xl md:text-3xl font-bold text-center flex items-center">Pokedex</h1>
                <img src={pokeball} alt="Imagen de pokeball" className="size-5" />
            </div>
            <div className="flex gap-6 items-center justify-start md:justify-center px-8 w-3/4">
                <Search />
                <Filter />
            </div>
        </header>
     );
}

export default Header;