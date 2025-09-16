# API Helpers and External Endpoints

## Local helper

### `app/api.js`

#### `fetchElSwar(): Promise<any>`
- Fetches Surah metadata from `https://alquran.vip/APIs/surahs`.
- Returns parsed JSON body.
- Example:
```js
import { fetchElSwar } from "@/app/api";

async function load() {
  const surahs = await fetchElSwar();
  console.log(surahs);
}
```

## External endpoints used by components

- `GET https://alquran.vip/APIs/surahs`
  - Returns list of Surahs with `id`, `name_ar`, `name_en`, etc.
- `GET https://alquran.vip/APIs/reciterAudio?reciter_id={id}`
  - Returns object with `audio_urls` array. Used by `ElSwar` to play audio for a given reciter.
- `GET https://alquran.vip/APIs/ayah?number={soraId}`
  - Returns Ayat for the specified Surah id. Used by `ElMoshaf`.

Notes:
- Network calls are client-side; ensure the endpoints allow CORS.
- Handle errors and loading states as in the components.
