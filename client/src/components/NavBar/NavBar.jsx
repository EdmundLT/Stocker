import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import moment from "moment";
import LoginMenu from "./LoginMenu";
const NavBar = () => {
  let time = moment().format("MM-DD-YYYY, h:mm:ss a");
  const [ctime, SetTime] = useState();
  function UpdateTime() {
    time = moment().format("MM-DD-YYYY, h:mm:ss a");
    SetTime(time);
  }
  setInterval(UpdateTime, 100);
  //bg-gradient-to-r from-cyan-500 to-blue-500
  return (
    <div className=" p-2 flex justify-between content-center bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg rounded-md">
      <div className="pl-2 pt-1">
        <a href="/">
          <p className="text-4xl font-Yanone text-[#17252A] font-bold">
            Stocker
          </p>
        </a>
      </div>
      <div className="pt-2 pl-4">
        <p className="text-xl md:text-2xl lg:text-2xl font-Yanone font-semibold text-[#17252A]">
          {ctime}
        </p>
      </div>
      <div className="pt-2 grid grid-cols-2 gap-4 text-[#17252A]">
      <LoginMenu />
      <span className="pt-1"><MenuIcon /></span>
        
        
      </div>
    </div>
  );
};

export default NavBar;
