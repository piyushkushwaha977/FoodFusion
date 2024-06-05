import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
    
    const {restaurantData} = props

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla:{deliveryTime = ""}

    } = restaurantData.info

    const limitedCuisineName = cuisines?.join(", ").substring(0,30)
    // console.log("cuisines name" , limitedCuisineName)

return (
<div className="flex flex-col overflow-hidden m-3 p-3 w-72 md:w-60 rounded-sm mx-auto md:mx-0
    hover:shadow-xl duration-300 font-poppins bg-white shadow-sm ">
  <div className="">
    <div>
     <img
      loading="lazy"
      className='relative w-full md:w-full  min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md'
      src={CDN_URL + cloudinaryImageId}
      alt="Restaurant Image"
      onError={(event) =>
                  (event.target.style.display = "none")
             }
    ></img>
    </div> 
   </div>
    <span className="block font-bold text-md mt-3 ">
      {name?.length > 20 ? name.slice(0, 20) + "..." : name}
    </span>
    <span className="mt-3 text-gray-600 text-xs">{limitedCuisineName}...</span>
    <div className="mt-3 mb-3 flex items-center justify-between">
      <span
        className="w-12 text-center border rounded-md text-white text-xs mr-2"
        style={
          avgRating >= 4
            ? { backgroundColor: "#1db458" }
            : avgRating >= 3
            ? { backgroundColor: "#DB7C38" }
            : avgRating === "--"
            ? { backgroundColor: "#1db458" }
            : { backgroundColor: "#E31837" }
        }
      >
        {avgRating} &#9733;
      </span>
      <span className="text-xs">{costForTwo}</span>
      <span className="text-xs ">{deliveryTime} MINS</span>
    </div>
    {/* <div className="flex gap-10  mt-2 text-sm ">
      <span className="font-medium">{costForTwoString}</span>
      <span className="font-medium">{deliveryTime} MINS</span>
    </div> */}
  </div>
  )
}
export default RestaurantCard;

// HIGH ORDER COMPONENT FOR RESTAU CARD 
export const topRatedRestaurants = (RestaurantCard) => {
    return (props) => {
        return (<div className='relative '>
        <p className='absolute z-10   rounded-md p-2 px-4 bg-zinc-900 text-white text-xs'>
          Top Rated '⭐'
        </p>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}




