export default function StyleGuide() {
  const colors = [
    { name: "Primary", text: "#FFF6F2", color: "#E74B4C" },
    { name: "Secondary", text: "#424242", color: "#F0F084" },
    { name: "Accent", text: "#424242", color: "#E74B4C" },
  ];
  return (
    <div className="py-12 px-8 max-w-[1000px] mx-auto">
      <h1 className="text-xl">Welcome Pets</h1>
      <h2 className="text-4xl font-semibold">Style Guide</h2>
      <div className="mt-12">
        <p className="mb-4 text-3xl">Fredoka H1</p>
        <p className="mb-4 text-xl">Fredoka H1</p>
        <p className="mb-4 text-base">Fredoka H1</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {colors.map((item, i) => (
          <div
            key={i}
            className="w-full h-24 rounded-lg relative"
            style={{ background: item.color, color: item.text }}
          >
            <div className="absolute top-2 left-3 font-medium tracking-wide">
              {item.name}
            </div>
            <div className="absolute bottom-2 right-3 font-medium tracking-wide">
              {item.color}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-wp-white rounded-lg px-4 py-2"></div>
    </div>
  );
}
