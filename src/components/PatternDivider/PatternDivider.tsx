import pattern from "./assets/paw-pattern.jpg";
export default function PatternDivider() {
  return (
    <div
      className="h-[180px] w-full"
      style={{ background: `url(${pattern})` }}
    ></div>
  );
}
