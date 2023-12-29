import photo from "./assets/photo.jpg";

export default function About() {
  return (
    <div className="py-16 px-8">
      <h2 className="text-4xl w-full text-center mb-12 font-semibold">
        About Us
      </h2>
      <div className="max-w-[700px] mx-auto grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-x-12 mb-8">
        <div>
          <img src={photo} alt="" className="mx-auto mb-8 md:mb-0" />
        </div>
        <div className="h-full flex justify-center items-center leading-[2.3rem] text-lg">
          <div></div>
          WelcomePets.org is more than just a pet adoption platform – it's a
          community driven by compassion and a shared love for animals. Our
          journey began with a simple yet profound mission: to connect people
          who want to adopt a pet with those who need to rehome their cherished
          companions.
        </div>
      </div>
      <div className="bg-[#F2F2F2] py-8 px-16 rounded-md max-w-[700px] mx-auto font-medium leading-[2rem]">
        By choosing WelcomePets.org, you're not just adopting a pet – you're
        becoming part of a movement dedicated to making the world a better place
        for animals.
        <div className="text-[#666] font-normal">
          - Nice Banjara (Founder & CEO)
        </div>
      </div>
    </div>
  );
}
