export default function Home() {
  return (
    <main className="min-h-screen bg-background p-12">

      {/* Font test */}
      <h1 className="font-heading text-5xl font-bold text-text-main mb-2">
        Akhil Chigurupati
      </h1>
      <p className="font-sans text-xl text-text-main mb-12">
        Software Engineer — Plus Jakarta Sans heading, Inter body
      </p>

      {/* Color swatches */}
      <div className="flex flex-wrap gap-4 mb-12">
        <div className="w-32 h-20 rounded-xl bg-background border border-secondary flex items-end p-2">
          <span className="text-xs text-text-main font-sans">Background</span>
        </div>
        <div className="w-32 h-20 rounded-xl bg-surface flex items-end p-2">
          <span className="text-xs text-text-main font-sans">Surface</span>
        </div>
        <div className="w-32 h-20 rounded-xl bg-primary flex items-end p-2">
          <span className="text-xs text-white font-sans">Primary</span>
        </div>
        <div className="w-32 h-20 rounded-xl bg-secondary flex items-end p-2">
          <span className="text-xs text-text-main font-sans">Secondary</span>
        </div>
        <div className="w-32 h-20 rounded-xl bg-text-main flex items-end p-2">
          <span className="text-xs text-white font-sans">Text</span>
        </div>
      </div>

      {/* Button test */}
      <div className="flex gap-4 mb-12">
        <button className="bg-primary text-white font-sans font-medium px-6 py-3 rounded-lg">
          Primary Button
        </button>
        <button className="border-2 border-primary text-primary font-sans font-medium px-6 py-3 rounded-lg">
          Outline Button
        </button>
      </div>

      {/* Card test */}
      <div className="bg-surface rounded-2xl p-8 max-w-md border border-secondary/30 shadow-sm">
        <h2 className="font-heading text-2xl font-semibold text-text-main mb-2">
          Sample Card
        </h2>
        <p className="font-sans text-text-main/80 leading-relaxed">
          This is how a card will look in your portfolio — surface background,
          soft border, clean text.
        </p>
        <span className="inline-block mt-4 bg-secondary/30 text-primary text-sm font-sans font-medium px-3 py-1 rounded-full">
          Tech Tag
        </span>
      </div>

    </main>
  );
}
