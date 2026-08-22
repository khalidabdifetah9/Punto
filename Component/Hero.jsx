export default function Hero() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white mt-16 sm:mt-24 md:mt-40 min-h-[calc(100vh-60px)] flex flex-col justify-between pt-8 sm:pt-10 md:pt-12 pb-0 overflow-hidden select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full px-4 sm:px-8 md:px-0">
        <div className="md:col-start-7 md:col-span-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-poppins lg:text-[3rem] leading-normal md:leading-snug font-normal text-zinc-100 tracking-tight">
            Somewhere between an idea and a working website, you will usually
            find me. I speak fluent HTML, questionable CSS, and surprisingly
            decent human.
          </p>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-16 leading-none px-2 sm:px-4 md:px-0">
        <h1 className="text-[22vw] sm:text-[24vw] font-bold tracking-tighter text-[#e5e5e5] flex items-start -mb-2 sm:-mb-4 md:-mb-8">
          Punt <span className="text-[#e5192a]">o</span>
        </h1>
      </div>
    </section>
  );
}