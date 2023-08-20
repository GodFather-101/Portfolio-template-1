import React from "react";
import "./home.css";
import HomeBg from "../../assets/images/Home-bg.png";

function Home() {
  return (
    <>
      <div className="home flex flex-col items-center w-full h-full">
        <div className="sm:top-52 container border-custom-style absolute top-16 left-32 md:left-16 md:top-1/2 border-solid border-l-4 p-5 sm:h-fit sm:pr-0 sm:pt-0 sm:pb-3 sm:pl-3">
          <ul className="text-base sm:text-sm capitalize w-full sm:w-1/2 md:w-3/4">
            <li className="sm:m-0 mt-6 mb-6 sm:-left-32 sm:top-32 sm:font-bold sm:relative">
              hi there! 👋
            </li>
            <li className="sm:text-sm">
              I’M{" "}
              <span className="font-bold text-xl sm:text-base">
                BOOPATHI RAJ
              </span>
            </li>
            <li className="mt-6 mb-6 sm:mt-4 sm:mb-4">
              data science/ machine learning
            </li>
            <li className="mt-6 mb-6 sm:mt-4 sm:mb-4">
              🚀 Passionate data scientist & machine learning engineer with a
              hunger for real-world impact. Transforming academic prowess into
              practical solutions. 📊 Strong analytics wizard driven by data's
              potential to spark innovation. Let's conquer challenges together!
              💡 <span className="font-semibold">#DataDrivenGenius</span>
            </li>
            <div className="sm:flex-col sm:text-xs sm:space-x-0 sm:space-y-2 flex flex-row space-x-7 text-sm">
              <li>
                <button className="hover:bg-white capitalize hover:text-black font-bold border-2 hover:transition-all border-red-400 rounded-xl p-3 text-center text-white bg-btn-clr">
                  explore now
                </button>
              </li>
              <li>
                <button className="hover:bg-white capitalize hover:text-black font-bold border-2 hover:transition-all border-red-400 rounded-xl p-3 text-center text-white bg-btn-clr">
                  hire me
                </button>
              </li>
            </div>
          </ul>
        </div>
        <div className="image md:top-20 absolute bottom-2 right-0 sm:absolute sm:top-5">
          <img
            src={HomeBg}
            alt="Smart Boy Working"
            width="350px"
            height="350px"
            className="sm:w-44 md:w-72"
          />
          <div className="backside md:top-0 bg-ec-1 w-96 h-96 md:w-80 md:h-80 rounded-full absolute -bottom-10 -right-10 -z-30 sm:top-0 sm:w-48 sm:rounded-none sm:right-0 sm:rounded-tl-3xl sm:rounded-bl-3xl sm:h-44"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
