export default function Hero() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white mt-40 min-h-[calc(100vh-60px)] flex flex-col justify-between pt-12 pb-0 overflow-hidden select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        <div className="md:col-start-7 md:col-span-6">
          <p className="text-2xl md:text-3xl font-poppins lg:text-[3rem] leading-snug font-normal text-zinc-100 tracking-tight">
            Somewhere between an idea and a working website, you will usually
            find me. I speak fluent HTML, questionable CSS, and surprisingly
            decent human.
          </p>
        </div>
      </div>

      <div className="w-full mt-16 leading-none">
        <h1 className="text-[24vw] font-bold tracking-tighter text-[#e5e5e5] flex items-start  -mb-6 md:-mb-8">
          Punt <span className="text-[#e5192a]">o</span>
        </h1>
      </div>
    </section>
  );
}
