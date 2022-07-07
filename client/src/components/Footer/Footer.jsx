import React from 'react'
import { SiReact, SiMaterialui, SiNodedotjs,SiMongodb,SiExpress } from "react-icons/si";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    //bg-gradient-to-r to-cyan-500 from-blue-500
    <footer className='mx-auto p-5 bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg flex justify-between content-center'>
    <p className="text-base text-[#17252A] sm:text-center">© {year} Stocker.io
    </p>
    <div className="flex">
        <p className="flex text-2xl text-[#17252A] gap-5">
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