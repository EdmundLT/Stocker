import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import moment from "moment";
const NavBar = () => {
  let time = moment().format('MM-DD-YYYY, h:mm:ss a');
  const [ctime, SetTime] = useState();
  function UpdateTime() {
     time = moment().format('MM-DD-YYYY, h:mm:ss a');
    SetTime(time);
  }
  setInterval(UpdateTime, 100);

  return <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 flex justify-between content-center'>
  <div className="pl-2 pt-1">
  <a href="/">
  <p className="text-4xl font-Yanone text-white font-bold">Stocker</p>
  </a>
  </div>
  <div className="pt-2 pl-4">
  <p className="text-xl font-Yanone font-semibold text-white">{ctime}</p>
  </div>
  <div className="pt-2 pr-4 grid grid-cols-2 gap-4">
    <PersonIcon />
    <MenuIcon />
  </div>  
  </div>;

};

export default NavBar;
