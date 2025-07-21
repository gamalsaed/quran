"use client";
import Image from "next/image";
import yasserImg from "@/src/assets/yasser.svg";
import maherImg from "@/src/assets/maher.svg";
import mohamedImg from "@/src/assets/mohamed.svg";

const images = [yasserImg, maherImg, mohamedImg];

const imagess = [
  {
    name: "الشيخ ياسر الدسري ",
    img: yasserImg,
  },
  {
    name: "الشيخ ماهر المعيقلي",
    img: maherImg,
  },
  {
    name: "الشيخ محمد صديق المنشاوي",
    img: mohamedImg,
  },
];

export default function ChosenPhoto({ active, handlePhotoChange }) {
  return (
    <div className="flex flex-col mb-10">
      <div className="mb-10">
        <Image
          src={images[active]}
          alt="img"
          className="w-[400px] h-[250px] rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        {imagess.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handlePhotoChange(i)}
            >
              <Image src={item.img} alt="img" className="w-24 h-24" />
              <p className="cursor-pointer">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
