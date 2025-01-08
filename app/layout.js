import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./ui/Header";

const josefin = Josefin_Sans({
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: '%s | Oscar portfolio',
    default: 'Oscar portfolio',
  },
  description: 'Oscar portfolio built with App Router.',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased`}
      >
        <div className="min-h-dvh flex flex-col">
          <header className="z-10 bg-indigo-500 h-14 flex items-end p-2 px-4 fixed w-full">
            <Header />
          </header>

          <main className="flex-1 pt-14 dark:bg-slate-900 dark:text-slate-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
