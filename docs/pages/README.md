# Pages and Layouts

This app uses the Next.js App Router under `app/`.

## `app/layout.js` (RootLayout)

- Exports `metadata` and default `RootLayout({ children })`.
- Provides site-wide header with navigation and a footer.
- Usage: Next.js auto-wraps all pages with this layout.

## `app/page.js` (Home)

- Default export `Home()` renders the landing page with a search input and three `ShekhCard` components.
- Example usage of `ShekhCard` shown inline in the page.

## `app/quran/page.js` (Quran)

- Client page that coordinates components:
  - `ChosenPhoto` — reciter selection
  - `ElSwar` — Surah list and audio player
  - `ElMoshaf` — Ayat viewer with pagination
- Minimal usage example (inside another page or client component):
```jsx
import Quran from "@/app/quran/page";

export default function Example() {
  return <Quran />;
}
```

## `app/error.js` (Error Boundary)

- Client error boundary component receiving `{ error, reset }` from Next.js.
- Displays error details and a retry button.
- Next.js will render this when errors occur in a route segment.
