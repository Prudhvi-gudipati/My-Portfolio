import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section id="hero" className="pb-28 mt-20 flex px-6 lg:px-10">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          {/* <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Daniel Shan Balico Graduation Picture"
          /> */}

          {/* =========== TOOLTIP TEXT =========== */}
          {/* <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span> */}
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[100%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl ">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%] text-primaryDark">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-full leading-7 text-justify">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 text-primaryDark border border-primaryDark hover:bg-primary hover:text-white hover:border-primary dark:border-white font-medium transition-all duration-300 rounded-lg"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-primary dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium text-primaryDark">Contact</span>
                <IoIosArrowForward className="self-center text-primaryDark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
