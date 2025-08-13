import { useState } from "react";

function Filter() {
  const [filter, setFilter] = useState(false);

  //   Funcion para manejar el click en el icono de filtro
  const handleClick = () => {
    setFilter(!filter);
  };

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
      </div>
    </div>
  );
}

export default Filter;
