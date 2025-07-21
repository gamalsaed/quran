"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import yasserImg from "@/src/assets/yasser.svg";
import maherImg from "@/src/assets/maher.svg";
import mohamedImg from "@/src/assets/mohamed.svg";

const imagess = [
  {
    name: "الشيخ ياسر الدسري ",
    img: yasserImg,
    apiNumber: 92,
  },
  {
    name: "الشيخ ماهر المعيقلي",
    img: maherImg,
    apiNumber: 102,
  },
  {
    name: "الشيخ محمد صديق المنشاوي",
    img: mohamedImg,
    apiNumber: 113,
  },
];

export default function ElSwar({ active, handleActiveSora, soraId }) {
  const [swar, setSwar] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function swarFn() {
      try {
        const elSwar = await fetch("https://alquran.vip/APIs/surahs");
        if (!elSwar.ok) throw new Error("Failed to get El Swar");
        const data = await elSwar.json();
        setSwar(data);
      } catch (err) {
        setError({ swar: "Failed to get the audio" });
      }
    }

    swarFn();
  }, [setSwar, setError]);

  useEffect(() => {
    async function audioFn() {
      try {
        if (!imagess || !imagess[active]) return;
        const audios = await fetch(
          `https://alquran.vip/APIs/reciterAudio?reciter_id=${imagess[active].apiNumber}`
        );
        if (!audios.ok) throw new Error("Failed to get audios");
        const data = await audios.json();
        setAudio(data.audio_urls);
      } catch (err) {
        setError({ audioError: "Failed to get the audio" });
      }
    }

    audioFn();
  }, [active]);

  return (
    <div className="flex flex-col gap-2 ">
      <div
        id="audio"
        className="bg-[#7B7878] rounded-2xl py-3 pt-10 px-8 relative "
      >
        {error?.audioError && (
          <h2 className="text-red-500">An Error Occured {error.audioError}</h2>
        )}
        <Image
          src={imagess[active].img}
          alt="img"
          height={50}
          width={50}
          className="rounded-full absolute top-[-20px] left-5"
        />
        {audio && (
          <audio
            controls
            src={audio[soraId - 1]?.audio_url}
            className="w-full items-center rounded-full bg-gray-100"
          />
        )}
      </div>
      {swar && (
        <div className=" border-[#DBDEE5] border-2 rounded-2xl py-3 px-8 h-[500px] overflow-auto flex flex-col gap-3">
          {swar.map((sora) => {
            return (
              <div
                key={sora.id}
                className="hover:bg-[#7B7878] hover:text-white duration-200 border-[#DBDEE5] border-2 py-3 px-5 rounded-2xl  flex items-center justify-between gap-4 cursor-pointer"
                style={{
                  backgroundColor: soraId === sora.id && "#7B7878",
                  color: soraId === sora.id && "white",
                }}
                onClick={() => handleActiveSora(sora.id)}
              >
                <h2 className="text-xl font-semibold">{sora.name_ar}</h2>
                <h3 className="text-lg italic">{sora.name_en}</h3>
              </div>
            );
          })}
        </div>
      )}
      {!swar && !error && <h1>Loading...</h1>}
      {error?.swar && (
        <h2 className="text-red-500">An Error Occured {error}</h2>
      )}
    </div>
  );
}
