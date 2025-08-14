function PokeDataCard({ children, data }) {
  return (
    <div className="border-r-2 border-accent flex flex-col gap-4 justify-between p-2">
      {children}
      <p className="font-bold">{data}</p>
    </div>
  );
}

export default PokeDataCard;
