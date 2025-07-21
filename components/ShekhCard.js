import Image from "next/image";
export default function ShekhCard({ img, text }) {
  return (
    <div className="group my-10 relative inline-block">
      <Image
        className="rounded-full blur-2xl duration-200 ease-in-out transition-filter group-hover:blur-none"
        alt={text}
        src={img}
        width={200}
        height={200}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-xl cursor-pointer">{text}</p>
      </div>
    </div>
  );
}
