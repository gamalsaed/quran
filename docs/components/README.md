# Components

This app exposes several client-side React components under `components/`.

## ChosenPhoto

- Props:
  - `active: number` — index of currently selected reciter photo (0-based)
  - `handlePhotoChange: (index: number) => void` — callback when user selects a different photo
- Behavior: Displays a large image for the active reciter with a list of selectable thumbnails.
- Example:
```jsx
import { useState } from "react";
import ChosenPhoto from "@/components/ChosenPhoto";

export default function Example() {
  const [active, setActive] = useState(0);
  return <ChosenPhoto active={active} handlePhotoChange={setActive} />;
}
```

## ElSwar

- Props:
  - `active: number` — index selecting the reciter, used to fetch audio list
  - `soraId: number` — currently selected Surah id (1-114)
  - `handleActiveSora: (id: number) => void` — callback when a Surah is chosen
- Behavior: Fetches Surah list and reciter audios; renders audio player for the active Surah and a scrollable Surah picker.
- Example:
```jsx
import { useState } from "react";
import ElSwar from "@/components/ElSwar";

export default function Example() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [soraId, setSoraId] = useState(1);
  return (
    <ElSwar
      active={activePhoto}
      soraId={soraId}
      handleActiveSora={setSoraId}
    />
  );
}
```

## ElMoshaf

- Props:
  - `soraId: number` — Surah id to fetch and display Ayat for
- Behavior: Fetches Ayat for the given Surah and paginates them (10 per page) with next/prev controls.
- Example:
```jsx
import { useState } from "react";
import ElMoshaf from "@/components/ElMoshaf";

export default function Example() {
  const [soraId, setSoraId] = useState(1);
  return <ElMoshaf soraId={soraId} />;
}
```

## ShekhCard

- Props:
  - `img: StaticImport | string` — image source for the reciter
  - `text: string` — label displayed over the image
- Behavior: Circular reciter image with hover blur effect and overlayed text.
- Example:
```jsx
import ShekhCard from "@/components/ShekhCard";
import yasserImg from "@/src/assets/yasser.svg";

export default function Example() {
  return <ShekhCard img={yasserImg} text="قراءة الشيخ" />;
}
```

---

Notes:
- Components marked with "use client" must be used in client components or pages.
- Network calls rely on `https://alquran.vip/APIs/` endpoints; ensure CORS and availability in your environment.
