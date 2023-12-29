import pattern from "./assets/pattern.png";

export default function Stories() {
  return (
    <div className="relative py-12 px-8 bg-wp-yellow">
      <div
        className="absolute opacity-40 top-0 left-0 w-full h-full"
        style={{ background: `url('${pattern}')`, backgroundSize: "80%" }}
      ></div>
      <h2 className="font-bold text-4xl text-center text-wp-gray">
        Success Stories
      </h2>
    </div>
  );
}
