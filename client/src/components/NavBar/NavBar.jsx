import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import moment from "moment";
const NavBar = () => {
  let time = moment().format('MMMM Do YYYY, h:mm:ss a');
  const [ctime, SetTime] = useState();
  const [dark, SetDark] = useState(false);
  function UpdateTime() {
     time = moment().format('MMMM Do YYYY, h:mm:ss a');
    SetTime(time);
  }
  setInterval(UpdateTime, 100);

  function SwitchDarkMode() {
    SetDark(!dark)
  }
  return <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 flex justify-between content-center'>
  <div className="pl-2">
  <a href="/">
  <p className="text-4xl font-Yanone text-white font-bold">Stocker</p>
  </a>
  </div>
  <div className="pt-1 pl-6">
  <p className="text-2xl font-Yanone font-semibold text-white">{ctime}</p>
  </div>
  <div className="pr-4 pt-2 grid gap-x-5 grid-cols-3">
  <div onClick={SwitchDarkMode}>
    {dark ? <LightModeIcon /> : <DarkModeIcon /> }
    </div>
    <PersonIcon />
    <MenuIcon />
  </div>  
  </div>;

};

export default NavBar;
