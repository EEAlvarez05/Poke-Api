function PokeStatsCard({ stat, value, color, transparent }) {
  return (
    <div className="flex items-center justify-start gap-6 md:gap-8">
      <div className="w-[40px]">
        <p>{stat}</p>
      </div>
      <div>
        <p>{value}</p>
      </div>
      <div
        className="w-52 h-4 rounded overflow-hidden"
        style={{ background: `${transparent}` }}
      >
        <div
          className="h-full bg-amber-300 w-1/2"
          style={{ width: `${(value * 100) / 255}%`, background: `${color}` }}
        ></div>
      </div>
    </div>
  );
}

export default PokeStatsCard;
