import React,{useState} from "react";
import "./nav.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

function Nav(props) {
  const [darkmode,setDarkMode] = useState(false)
  return (
    <>
      <div className="nav flex justify-center items-center m-3 flex-row h-full">
        <div className="dark-light-changer mr-14 sm:mr-5 flex flex-row justify-center items-center">
          <BsFillSunFill className={darkmode?"inline w-5 h-5 text-black opacity-40" : "inline w-5 h-5 text-yellow-500"} />
          <label  className="session-btn ml-2 mr-2 sm:mr-1" for="dark-light">
            <input
              type="checkbox"
              name="dark-light"
              id="dark-light"
              onChange={(e)=>{props.SessionChange(e.target.checked);setDarkMode(e.target.checked)}}
              className="cursor-pointer w-10 h-5 border border-solid border-black rounded-full"
            />
            <span id="dark-light" className={darkmode?"dark-light cursor-pointer relative mr-2 sm:mr-1 ml-2 sm:ml-1 w-14 h-7 rounded-2xl inline-block border-2 border-solid border-white before:bg-white":"dark-light cursor-pointer relative mr-2 sm:mr-1 ml-2 sm:ml-1 w-14 h-7 rounded-2xl inline-block border-2 border-solid border-black before:bg-basic-dark"}></span>
          </label>
          <BsMoonStarsFill className={darkmode?"inline w-4 h-4 opacity-100 text-white" : "inline w-4 h-4 opacity-50"} />
        </div>
        <div className="nav-control flex flex-row justify-center items-center">
          <div className="icons mr-5 sm:mr-3">
            <AiOutlineHome className="text-2xl" />
          </div>
          <div className={darkmode?"indicator border border-white border-solid w-16 h-16 rounded-full flex flex-row justify-center items-center":"indicator border border-black border-solid w-16 h-16 rounded-full flex flex-row justify-center items-center"}>
            <div className={darkmode?"pointer w-5 h-5 bg-white relative -top-1 -rotate-90":"pointer w-5 h-5 bg-black relative -top-1 -rotate-90"}></div>
            <div
              className="page-name inline text-center"
              style={{ fontSize: "10px" }}
            >
              <h3 className="font-bold">Home</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
