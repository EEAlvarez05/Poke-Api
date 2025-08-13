import { Link } from "react-router-dom";
import typeColors from "../../utils/typeColors";
import hexToRGBA from "../../utils/hexToRGBA";

function Card({ image, name = "", id = "", type = "" }) {
  const mainColor = typeColors[type] || "#d1d1d1";
  const transparentColor = hexToRGBA(mainColor, 0.1);
  const gradient = `linear-gradient(135deg, ${transparentColor} 0%, #555 100%)`;

  return (
    <Link to={"/" + name}>
      <div
        className="flex flex-col justify-center items-center text-black size-[150px] lg:size-[170px] bg-accent rounded-4xl relative hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 ease-out z-10"
        style={{
          background: gradient,
          boxShadow: "0 6px 12px rgba(255, 255, 255, 0.15)",
        }}
      >
        <img
          src={image}
          alt={"Imagen de " + name}
          className="size-28 z-20 lg:size-32"
        />
        <h4 className="text-2xl font-semibold z-20">{name}</h4>
        <p className="absolute text-4xl top-1 right-2 z-10 text-secondary/70 font-black">
          {"#" + id}
        </p>
        <img
          src="/pokeball.svg"
          alt="imagen de pokeball"
          className="absolute top-1/2 -translate-y-1/2 size-32 z-0 opacity-15"
        />
      </div>
    </Link>
  );
}

export default Card;
