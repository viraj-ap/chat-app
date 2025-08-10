interface Props {
  title: string;
  subtitle: string;
}

const AuthImagePattern = ({ title, subtitle }: Props) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 dark:bg-base-300 p-12 transition-colors duration-300">
      <div className="max-w-md text-center">
        {/* Pattern Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                i % 2 === 0 ? "bg-black/20 animate-pulse" : "bg-slate-500/20"
              }`}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-base-content">{title}</h2>

        {/* Subtitle */}
        <p className="text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
