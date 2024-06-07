import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsCart4 } from "react-icons/bs";
import { TbCurrentLocation } from "react-icons/tb";
import { MdCall } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { RiInformation2Fill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { GiBloodyStash } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../redux-store/CartSlice";


export const Header = () =>  {

  const [mobileDrawerOpen, isMobileDrawerOpen] = useState(false);
  const [loginBtn, setLoginBtn] = useState("Login")
  const onlineStatus = useOnlineStatus()

  const toggleNavbar = () => {
    isMobileDrawerOpen(!mobileDrawerOpen)
  }
    
  const items = useSelector(selectItemsInCart)
    

    return (
        <div className=" fixed mb-40 w-full rounded-sm  shadow-lg z-50 
                          bg-slate-50 ">
          <div className=" md:max-w-[1400px] mx-auto flex justify-between items-center" >
          <Link to="/">
          <div className="hidden md:flex ml-5 font-fira-poppins items-center relative font-extrabold text-2xl p-4">
            Food <span className=" text-orange-600 md:text-3xl">fusion</span>
              <GiBloodyStash className="inline md:text-2xl"/>
          </div>
          </Link>
         
          <div className="hidden md:block">
            <ul className="flex mt-5 mb-4 flex-wrap list-none pr-14 font-semibold text-gray-700 ">
          <li className=" md:mr-10 hover:text-black">
            <Link to="/" className=" flex items-center gap-1">
             <IoHome className="text-xl"/> 
            <p>Home</p>
            </Link>
          </li>
          <li className=" md:mr-10 hover:text-black">
            <Link to="/about" className=" flex items-center gap-1">
             <RiInformation2Fill className="text-xl"/> 
            <p>About</p>
            </Link>
          </li>
          <li className=" md:mr-10 hover:text-black">
            <Link to="/help" className=" flex items-center gap-1">
             <IoMdHelpCircle className="text-xl"/> 
            <p>Help</p>
            </Link>
          </li>
          <li className=" md:mr-6 hover:text-black ">
            <Link to="/contact" className=" flex items-center gap-1">
             <MdCall className="text-xl"/> 
            <p>ContactUs</p>
            </Link>
          </li>
              <li className=" md:px-3 md:mr-10">
                <Link
                  to="/cart"
                  className="flex gap-1 items-center"
                  aria-label="link to cart page"
                >
                  <BsCart4 className="inline text-2xl text-orange-400" />
                  <span className=" font-bold text-black p-[1px] absolute mb-7 ml-5 ">
                    {items.length > 0 && 
                      <span >
                         {items.length}
                      </span> }
                  </span>
                </Link>
              </li>
          <Link to='/location' className="hidden lg:block">
            <div className="cursor-pointer  md:px-3 md:mr-6 mb-2 flex items-center ">
                <TbCurrentLocation className="text-xl text-orange-400" />Location
                </div>
          </Link>
            </ul>
          </div>
          </div> 

          {/* <button>login</button> */}



      {/* For MOBILE NAVBAR  */}
    <div className=" w-full flex justify-between  ">
      <Link to="/">
          <div className=" md:hidden  font-fira-poppins items-center relative font-extrabold text-2xl p-4">
            Food <span className=" text-orange-600 ">fusion</span>
              <GiBloodyStash className="inline "/>
          </div>
      </Link>
       
    <div  className="flex md:hidden items-center justify-center space-x-5 mr-4">  
      <div className="text-white   ">
                <Link
                  to="/cart"
                  className="flex gap-1 items-center"
                  aria-label="link to cart page"
                >
                  <BsCart4 className="inline text-2xl text-orange-500 hover:text-blue-800" />
                  <span className=" font-bold text-orange-500 p-[1px]">
                    {items ? (
                      <div data-testid="cart">{items.length}</div>
                    ) : (
                      ""
                    )}
                  </span>
                </Link>
              </div>

      <div className="bg-orange-500  md:hidden mr-4 rounded-lg">
         <button
           className=" mt-1 mx-1"
           onClick={toggleNavbar}>
             {!mobileDrawerOpen ? <IoMenuSharp className="size-[25px]"/> : 
                                  <AiFillCloseSquare className="size-[30px]"/>}
          </button>
      </div>   
    </div>
   </div>    

    {mobileDrawerOpen && 
       <div className="w-full absolute rounded-2xl z-50  ">
        <ul className="w-11/12 mx-auto py-8 bg-black opacity-90 gap-y-14 flex flex-col justify-center items-center rounded-lg text-lg ">
          <li className="text-orange-500 hover:text-blue-800">
            <Link to="/" className=" flex items-center gap-1">
             <IoHome className="text-xl"/> 
            <p>Home</p>
            </Link>
          </li>
          <li className="text-orange-500 hover:text-blue-800">
            <Link to="/about" className=" flex items-center gap-1">
             <RiInformation2Fill className="text-xl"/> 
            <p>About</p>
            </Link>
          </li>
          <li className="text-orange-500 hover:text-blue-800">
            <Link to="/help" className=" flex items-center gap-1">
             <IoMdHelpCircle className="text-xl"/> 
            <p>Help</p>
            </Link>
          </li>
          <li className="text-orange-500 hover:text-blue-800 ">
            <Link to="/contact" className=" flex items-center gap-1">
             <MdCall className="text-xl"/> 
            <p>Contact Us</p>
            </Link>
          </li>
              <li className="text-white  md:mr-10">
                <Link
                  to="/cart"
                  className="flex gap-1 items-center"
                  aria-label="link to cart page"
                >
                  <BsCart4 className="inline text-2xl text-orange-500 hover:text-blue-800" />
                  <span className=" font-bold text-orange-500 p-[1px]">
                    {items ? (
                      <div data-testid="cart">{items.length}</div>
                    ) : ("")
                    }
                  </span>
                </Link>
              </li>
            </ul>
          
        </div>}
       
    </div>)
}

export default Header;