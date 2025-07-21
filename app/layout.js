import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo.svg";
import searchImg from "@/src/assets/search.svg";
import companyLogo from "@/src/assets/companyName.svg";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Quran App",
  description: "Quran App for Muslims",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSerif.className}>
      <body
        className={`${notoSerif.className} ${notoSerif.className} antialiased mt-0`}
      >
        <header className="bg-black text-white px-4 py-2 mb-10">
          <nav className="flex items-center justify-between max-sm:flex-col">
            <ul className="flex items-center gap-5 max-sm:mb-5">
              <li>
                <Image src={logo} alt="Logo" className="w-15 h-15" />
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/quran">Quran</Link>
              </li>
            </ul>
            <div>
              <p className="relative h-fit">
                <input
                  type="text"
                  className="bg-white text-black outline-0 h-[40px] w-[256px] text-xl pl-12 rounded-md max-sm:w-[100%]"
                  placeholder="ابحث هنا"
                />
                <Image
                  src={searchImg}
                  alt="Logo"
                  className="w-8 h-8 absolute top-[4px] left-2"
                />
              </p>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-black text-white px-4 py-2">
          <ul className="flex items-center gap-5">
            <li>
              <Image
                src={companyLogo}
                alt="Company Logo"
                className="w-15 h-15"
              />
            </li>
            <li className="font-semibold">
              <p className="rtl">The New Code هذا المشروع من شركة واقعك </p>
              <p>2025</p>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
