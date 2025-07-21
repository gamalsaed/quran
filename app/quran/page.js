"use client";
import { useState } from "react";
import ChosenPhoto from "@/components/ChosenPhoto";
import Elswar from "@/components/ElSwar";
import ElMoshaf from "@/components/ElMoshaf";
export default function Quran() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [activeSora, setActiveSora] = useState(1);

  function handleActiveSora(id) {
    setActiveSora(id);
  }

  function handleActive(id) {
    console.log(id);
    setActivePhoto(id);
  }
  return (
    <div>
      <div className="mx-5 flex justify-between max-md:flex-col">
        <ChosenPhoto active={activePhoto} handlePhotoChange={handleActive} />
        <div>
          <Elswar
            active={activePhoto}
            soraId={activeSora}
            handleActiveSora={handleActiveSora}
          />
        </div>
      </div>
      <ElMoshaf soraId={activeSora} />
    </div>
  );
}
