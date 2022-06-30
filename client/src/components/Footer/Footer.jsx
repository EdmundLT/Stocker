import React from 'react'
import { SiReact, SiMaterialui, SiNodedotjs,SiMongodb,SiExpress } from "react-icons/si";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='mx-auto bg-gradient-to-r to-cyan-500 from-blue-500 p-5 flex justify-between content-center'>
    <p className="text-sm text-sky-100 sm:text-center">© {year} Stocker.io
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