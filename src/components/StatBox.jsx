const StatsBox = ({
  stats = [
    { number: "34", labelTop: "MACHINERY", labelBottom: "Tools" },
    { number: "76", labelTop: "MACHINERY", labelBottom: "Tools" },
    { number: "08", labelTop: "MACHINERY", labelBottom: "Tools" },
  ],
}) => {
  return (
    <div className="relative z-20 flex justify-center -mb-20">
      <div className="bg-accent w-11/12 md:w-2/3 py-10 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 text-center shadow-lg">
        {stats.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="text-xs text-accent-foreground uppercase tracking-widest font-medium">
              {item.labelTop}
            </p>
            <p className="text-5xl font-extrabold text-accent-foreground">{item.number}</p>
            <p className="text-accent-foreground text-lg font-semibold">{item.labelBottom}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBox;
