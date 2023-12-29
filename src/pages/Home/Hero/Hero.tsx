import hero from "./assets/hero-img.png";

export default function Hero() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto px-8 py-24">
        <div className="flex justify-center items-center h-full">
          <div>
            <div className="text-5xl text-[#424242] font-extrabold tracking-wide leading-[4rem] max-w-[450px] mb-6">
              Bringing Pets and People Together with Love
            </div>
            <div className="leading-[2rem] max-w-[450px]">
              <span className="font-semibold mr-2">WelcomePets.org:</span>
              Your online hub for connecting pet lovers. Adopt a furry friend or
              find a loving home for your pet effortlessly.
            </div>
            <div className="bg-white px-4 py-2 rounded-md border-2 border-wp-gray inline-block mt-8">
              Get your pet
            </div>
          </div>
        </div>
        <div className="hidden md:inline-block">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
  );
}
