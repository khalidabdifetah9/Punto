import Hero from "@/Component/Hero";
import OverScroll from "@/Component/OverScroll";
export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-565">
        <Hero />
      </div>
      <OverScroll />
    </>
  );
}
