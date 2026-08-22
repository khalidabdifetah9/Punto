import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full bg-white py-30 font-poppins text-[#111827] min-h-screen">
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20 ">
        <div className="max-w-7xl ">
          <h1 className="text-5xl md:text-[7vw] font-sans font-bold tracking-tight mb-6">
            Contact Me
          </h1>
          <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Have something in mind? Don't overthink it. Send me the idea, even
            if it's still 40% confusion and 60% "trust me, it'll be cool." We'll
            figure out the rest.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#e5192a] mx-auto px-6 sm:px-12 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative w-full h-130 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/ki.jpg"
              alt="Contact Support Person"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl md:text-4xl tracking-tight">
                Send Your Message
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-10">
              <div className="flex flex-col max-w-50 mb-10 gap-2 text-center sm:text-left">
                <h3 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">
                  Socials
                </h3>
                <Link
                  href="https://t.me/Kalida5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  Telegram
                </Link>
                <Link
                  href="https://www.linkedin.com/in/khalid-abdifetah-197630412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/kalidabdi555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  Twitter
                </Link>
              </div>
              <div>
                <h1 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">Phone Number</h1>
                <p className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors">+251973188859</p>
              </div>
              <div className="sm:col-span-2">
                <h1 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">email</h1>
                <Link href="mailto:khalidabdifetah9@gmail.com" className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors break-words">khalidabdifetah9@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}