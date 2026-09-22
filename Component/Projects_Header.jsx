import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });
export default function ProjectsHeader({
  label = "<Projects/>",
  title = "Selected Work",
  startYear = 2022,
  endYear = 2026,
}) {
  return (
    <header
      className={`${bebas.className} grid grid-cols-2  gap-y-10 mb-30 bg-white px-[4vw] pb-[4vw] pt-[3vw] text-black md:grid-cols-[1fr_auto_1fr] md:gap-y-0`}
    >
      <p className="text-[13px] uppercase leading-none tracking-wider md:text-[0.8vw] md:min-[1200px]:text-[15px]">
        {label}
      </p>

      <h2 className="order-last col-span-2 text-center text-[11vw] font-bold uppercase leading-[0.82] tracking-[0.09em] md:order-none md:col-span-1 md:text-[7.1vw]">
        <span className="block">{title}</span>
        <span className="block">
          {startYear} &mdash; {endYear}
        </span>
      </h2>
    </header>
  );
}
