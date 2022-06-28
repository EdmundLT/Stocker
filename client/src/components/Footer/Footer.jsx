import React from 'react'
import { SiReact, SiMaterialui, SiNodedotjs,SiMongodb,SiExpress } from "react-icons/si";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-white justify-between flex shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} Stocker.io
    </p>
    <div className="flex">
        <p className="flex text-2xl text-sky-100 gap-5">
        <SiMongodb size={"25px"} />
        <SiExpress size={"25px"} />
        <SiReact size={"25px"} /> 
        <SiNodedotjs size={"25px"}/>
        <SiMaterialui size={"25px"} />
        </p>
        </div>

    
    
</footer>
  )
}

export default Footer