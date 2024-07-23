import React from 'react'
import { Links } from '../utils/constant';
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bottom-0 mt-24 text-center text-sm font-medium font-poppins h-[120px]
       flex justify-center items-center bg-[#020617] text-white">
         <div className=' flex-col gap-4'>
             <div className=' mb-4 my-5 w-fit mx-auto flex gap-7 text-gray-500  text-3xl cursor-pointer '> 
              <a href={Links.twitter}><FaXTwitter className='hover:text-gray-200' /> </a>
              <a href={Links.linkedin}><BsLinkedin className='hover:text-gray-200'/></a>
              <a href={Links.github}><VscGithubInverted className='hover:text-gray-200'/></a>
              <a href={Links.instagram}><FaInstagram className='hover:text-gray-200'/></a>
              
              
              
             </div>
             <div className=' text-lg text-gray-300 pb-6 md:pb-5'>© Copyright  2024 
             <span className=' font-bold text-lg text-white pl-4'>Piyush Kushwaha</span>
             </div>
         </div>
           
      </div>

  )
}

export default Footer 






// const Footer = () => {
//     return (
//       <div className="footer bottom-0 mt-24 text-center text-sm font-medium font-poppins h-20
//        flex justify-center items-center bg-slate-900 text-white">
//         <h1 className="footer text-sm lg:text-[20px] ">
//         © 2024 MADE BY <span className="text-orange-500">
//         🙋‍♂️ PIYUSH KUSHWAHA WITH❣️</span> </h1>
           
//       </div>
//     );
//   };
  
//   export default Footer;



