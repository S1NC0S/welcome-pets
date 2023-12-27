import pattern from "./assets/pattern.jpg";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";

export default function HowItWorks() {
  return (
    <div className="relative py-16 bg-[#e1e10b] bg-opacity-50 text-[#424242]">
      {/* pattern */}
      <div
        className="absolute h-full w-full top-0 left-0 opacity-40"
        style={{
          background: `url('${pattern}')`,
          backgroundSize: "60%",
        }}
      ></div>
      <div className="relative z-50">
        <h2 className="text-center text-5xl text-red font-bold mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1000px] mx-auto gap-x-16 text-center">
          {/* ITEM 1 */}
          <div className="">
            <div className="mt-6 bg-[#FFE10B] h-20 w-20 rounded-full border-2 border-[#000] mx-auto mb-4 flex justify-center items-center p-3">
              <img src={one} />
            </div>
            <div className="font-bold text-2xl mb-6">
              Find Your Furry Friend
            </div>
            <div className="text-lg">
              Start your journey by browsing through our collection of adorable
              pets. Use our intuitive search filters to narrow down your
              preferences.
            </div>
            <div className="inline-block mt-6  rounded-lg border-2 border-red text-red capitalize bg-white px-4 py-2 font-medium shadow-md">
              Browse available pets
            </div>
          </div>
          {/* ITEM 2 */}
          <div className="max-w-[250px]">
            <div className="bg-[#FFE10B] h-20 w-20 rounded-full border-2 border-[#000] mx-auto mb-4 flex justify-center items-center p-3">
              <img src={two} />
            </div>
            <div className="font-bold text-2xl mb-6">Apply and Vet Check</div>
            <div className="text-lg">
              Complete our easy and secure adoption application form. As part of
              our commitment to pet welfare, our team, including a qualified
              vet, will conduct a thorough vet check to ensure a happy and
              healthy home for your new companion.
            </div>
            <div className="inline-block mt-6  rounded-lg border-2 border-red text-red capitalize bg-white px-4 py-2 font-medium shadow-md">
              Submit your application
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="max-w-[250px]">
            <div className="mt-6 bg-[#FFE10B] h-20 w-20 rounded-full border-2 border-[#000] mx-auto mb-4 flex justify-center items-center p-3">
              <img src={three} />
            </div>
            <div className="font-bold text-2xl mb-6">Adoption Success</div>
            <div className="text-lg">
              Await our swift response as we review your application. Once
              approved, you'll be ready to welcome your new furry family member.
              Join our community and share your joyous adoption story!
            </div>
            <div className="inline-block mt-6  rounded-lg border-2 border-red text-red capitalize bg-white px-4 py-2 font-medium shadow-md">
              Share your joy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
