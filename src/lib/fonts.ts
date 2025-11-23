import { Geist, Noto_Sans_Mono } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/classes";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

const fontChillax = localFont({
  src: "../assets/fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
});

export const fontVariables = cn(fontSans.variable, fontNotoMono.variable, fontChillax.variable);
