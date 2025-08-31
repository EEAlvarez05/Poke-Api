import { Link } from "react-router-dom";
function PokeEvolutionCard({ image, name }) {
  return (
    <Link to={`/${name}`}>
      <div className="flex flex-col items-center justify-center p-1">
        <img
          src={image}
          alt={"imagen de " + name}
          className="size-20 hover:scale-110 transition duration-300 ease-in-out"
        />
        <p className="font-semibold">{name}</p>
      </div>
    </Link>
  );
}

export default PokeEvolutionCard;
