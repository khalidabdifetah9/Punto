import MyImage from "./MyImage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import ImageReveal from "./ImageReveal";
import Footer from "./Footer";
export default function OverScroll() {
  return (
    <main className="relative w-full bg-black min-h-screen overflow-x-clip">
      <MyImage src="/kalid.jpg" />
      <div className="relative z-10 mt-[-100vh] bg-black min-h-screen w-full rounded-t-3xl shadow-2xl">
          <AboutMe />
          <div className="h-[0.6px] w-full my-35 bg-[#e5192a]/50"/>
          <Skills/>
          <MyProjects/>
          <ImageReveal/>
      </div>
          <Footer/>
          <div className="w-full h-110 bg-[#e5192a]"/>
    </main>
  );
}