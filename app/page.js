import Image from "next/image";
import searchImg from "@/src/assets/search.svg";
import book from "@/src/assets/book.svg";
import ShekhCard from "@/components/ShekhCard";
import yasserImg from "@/src/assets/yasser.svg";
import maherImg from "@/src/assets/maher.svg";
import mohamedImg from "@/src/assets/mohamed.svg";
export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-7 w-full px-5">
      <div>
        <h2 className="mx-auto text-4xl font-bold ">استمتع بجمال القران</h2>
      </div>
      <div className="max-w-[928px] w-full">
        <p className="relative h-[50px] w-full">
          <input
            type="text"
            className="block bg-[#F0F2F5] text-black outline-0 h-[50px] w-full mx-auto text-xl pl-12 rounded-md"
            placeholder="Search"
          />
          <Image
            src={searchImg}
            alt="Logo"
            className="w-7 h-7 absolute top-[12px] left-[13px]"
          />
        </p>
      </div>
      <div className="border-[#DBDEE5] border-2 max-w-[928px] w-full rounded-md mb-10">
        <header className="border-b-2 border-[#DBDEE5] px-3 py-3 text-xl font-bold flex items-center gap-3">
          <Image src={book} alt="Logo" className="w-[43px] h-[43px]" />
          <p>Surah Selection</p>
        </header>
        <section className="flex justify-center gap-10 max-md:flex-col">
          <ShekhCard img={yasserImg} text="قران ياسر الدسري" />
          <ShekhCard img={maherImg} text="قران ماهر المعيقلي" />
          <ShekhCard img={mohamedImg} text="قران محمد قديق المنشاوي" />
        </section>
      </div>
    </div>
  );
}
