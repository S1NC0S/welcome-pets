import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="relative px-12 h-24 py-3 w-full bg-[#f9f9f9] text-black flex justify-between border-b border-[rgba(0,0,0,.1)]">
      <div className="h-full flex items-center">
        <Logo className="h-full" />
      </div>
      <div className="h-full items-center flex flex-wrap font-semibold text-red gap-x-4">
        {["Adopters", "Guardians", "Help", "FAQ"].map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
      <div className="h-full items-center flex flex-wrap gap-x-3">
        <Button className="px-6 font-semibold tracking-wide">Sign In</Button>
        <Button className="px-6 font-semibold bg-red hover:bg-white tracking-wide">
          Register
        </Button>
      </div>
    </nav>
  );
}
