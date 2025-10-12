import { Geist, Noto_Sans_Mono } from "next/font/google";

import { cn } from "@/lib/classes";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

export const fontVariables = cn(fontSans.variable, fontNotoMono.variable);
