import pokeball from "../../assets/images/pokeball.svg";
function NotFound() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <p className="text-2xl">No se encontraron pokemon</p>
      <img src={pokeball} alt="Pokeball" className="size-24" />
    </div>
  );
}

export default NotFound;
