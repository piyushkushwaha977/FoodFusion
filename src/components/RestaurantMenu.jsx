import React from 'react'
import RestaurantCategory from './RestaurantCategory'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import {CDN_URL} from "../utils/constant"
import { useParams } from 'react-router'
import { useState } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoTimeSharp } from "react-icons/io5";
import { FaBiking } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Footer from './Footer'
import BodyShimmer from './BodyShimmer'

const RestaurantMenu = () => {

  const {resId} = useParams()
  const resInfo = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = useState(0);

  const handleClick = (index) => {
    if(index === showIndex) {
      setShowIndex(null)
    }else{
      setShowIndex(index)
    }
  }

  if(resInfo === null) return <BodyShimmer/>  

    // Try to Filter all the Categories of Menu List Items
  const categories = resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (cat) =>
       cat?.card?.card?.["@type"] === 
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const {name, costForTwo, avgRating,cuisines,cloudinaryImageId, areaName
    ,totalRatingsString ,costForTwoMessage,sla:{slaString, restaurantId,deliveryTime},feeDetails:{amount="",message}} = 
  resInfo?.data?.cards[2]?.card?.card?.info
  // const menuCardValues =  {name, costForTwo, avgRating,cuisines,cloudinaryImageId ,costForTwoMessage,sla:{slaString, restaurantId,deliveryTime},feeDetails:{amount,message}}       
  // console.log("menuCardValues" , menuCardValues  )

  const  cleanedStr = message.replace(/<\/?[^>]+(>|$)/g, "") 

  // console.log("ALL THE CATEGORIES" , categories)
  

return(
  <div className=' w-full max-w-[1200px] mt-20 md:mt-24 mx-auto h-full bg-[#eaeaea] rounded-lg '>
    <div className=" w-full mb-8 ">
        <h1 className="font-bold my-2 mt-6 text-2xl text-blue-950 ml-8 md:ml-28 font-poppins">{name}</h1>
        {/* MAIN CARD FOR MENU RESTAURANTS COMPONENT */}
      <div className=' w-10/12 mx-auto flex  md:p-8 justify-between items-start bg-white rounded-lg shadow-md sha shadow-gray-600'>
        {/* RIGHT-SECTION */}
        <div className='w-full md:w-8/12 border border-gray-500 rounded-3xl p-6 md:ml-6 shadow-md shadow-orange-400 '>
          <div 
          className=' font-extrabold font-poppins'
          ><span className='text-xl -ml-2'><FaStar className='inline mb-1 text-green-500'/>{avgRating} ({totalRatingsString})</span> .<span className='hidden md:block '> <LiaRupeeSignSolid className=' inline'/>{costForTwo / 100} Cost For Two</span></div>
          <div className=' text-orange-600 font-bold cursor-pointer underline'>{cuisines.join(", ")}</div>
          <div className=' my-2'>
            <div className=' font-poppins font-bold'>Outlet : <span className=' font-light font-mono text-gray-800'>{areaName}</span></div>
            <div className='font-bold align-baseline'><IoTimeSharp className='inline text-xl mb-1'/> {deliveryTime} mins</div>
          </div>

          <div className='border border-b-slate-200'></div>

          <div> <FaBiking className='inline size-6 text-[15px] md:text-xl'/> {cleanedStr}</div>

        </div>
        {/* LEFT-SECTION-FOR-IMAGE */}
        <div className='hidden  md:block'>
          <img
          className=' relative w-56 mr-6 min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md shadow-md shadow-black' 
          src={CDN_URL + cloudinaryImageId} alt='MENU-CARD-IMAGE'/>
        </div>
      </div>
   </div>
    {/* categories accordions */}
    {categories.map((category, index) => (
      // controlled component
      <RestaurantCategory
        key={category?.card?.card.title}
        data={category?.card?.card}
        setShowIndex={handleClick}
        index={index}
        showIndex={showIndex}
      />
    ))}
    
    <Footer/>
  </div>

  
  )
}

export default RestaurantMenu;