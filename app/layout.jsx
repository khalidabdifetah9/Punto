import { Poppins, Bebas_Neue, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/Component/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VALOR",
  description: "Valor is a digital portfolio built around thoughtful design, creative development, and a genuine attention to detail",
  icons: {
    icon: "/valor-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${bebasNeue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}