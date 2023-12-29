import pattern from "./assets/paw-pattern.jpg";
import fp1 from "./assets/fp1.jpg";
import fp2 from "./assets/fp2.jpg";
import fp3 from "./assets/fp3.jpg";

export default function Featured() {
  const items = [
    {
      name: "James",
      race: "Australian Shepherd Mix",
      gender: "Male",
      img: fp1,
      age: 9,
      lastVetVisit: "2023-10-12",
      needsHomeBy: "2024-03-03",
      location: "Scarborough, ON, 1 mile from Warden Station, ON",
    },
    {
      name: "Gopi",
      race: "Budgerigar",
      gender: "Male",
      img: fp2,
      age: 4,
      lastVetVisit: "2023-10-12",
      needsHomeBy: "2024-03-03",
      location: "Scarborough, ON, 1 mile from Warden Station, ON",
    },
    {
      name: "Luna",
      race: "Abyssian",
      gender: "Female",
      img: fp3,
      age: 2,
      lastVetVisit: "2023-10-12",
      needsHomeBy: "2024-03-03",
      location: "Scarborough, ON, 1 mile from Warden Station, ON",
    },
  ];
  return (
    <div className="relative bg-wp-red py-12 px-8">
      <div
        className="absolute w-full h-full top-0 left-0 z-10 opacity-20"
        style={{ background: `url(${pattern})` }}
      ></div>
      <div className="relative mx-auto max-w-[1000px] w-full z-20">
        <h2 className="text-4xl w-full text-center text-white font-bold">
          Featured Pet
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-2 pb-4 text-sm text-center"
            >
              <img src={item.img} alt="" className="object-cover w-full" />
              <h3 className="font-bold text-2xl text-[#555] text-center my-3">
                {item.name}
              </h3>
              <p className="">{item.race}</p>
              <p className="">
                {item.gender} / {item.age} years old
              </p>
              <p className="mt-4 bg-yellow-300 rounded-md px-2 py-1">
                Last vet visit: {item.lastVetVisit}
                <br />
                Needs home by: {item.needsHomeBy}
              </p>
              <p className="mt-4">{item.location}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <div className="bg-white px-6 py-2 shadow-md text-xl font-semibold border-2 border-black text-wp-red rounded-md inline-block mx-auto">
            Browse more Pets
          </div>
        </div>
      </div>
    </div>
  );
}
