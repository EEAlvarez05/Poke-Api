import { forwardRef } from "react";

const Searching = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      type="search"
      placeholder="Buscar"
      className={`bg-transparent outline-none ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export default Searching;
