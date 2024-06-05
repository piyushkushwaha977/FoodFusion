import RestaurantCard,{topRatedRestaurants} from "./RestaurantCard";
import ShimmerRestaurant from "./BodyShimmer";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef,useCallback } from "react";
import { RESTAURANT_API_URL , HOME_LAYOUT_IMG_URL} from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFilterRestaurants from "../utils/useFilterRestaurants"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";


const Body = () => {

  const [searchText , setSearchText] = useState("")
  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([])
  const [imageTable , setImageTable] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:2000})])
  // const [isLoading, setIsLoading] = useState(true)
  // console.log("image table " , imageTable)
  const onlineStatus = useOnlineStatus()
  const TopRestaurants = topRatedRestaurants(RestaurantCard)

  

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  
  useEffect(() => {
    fetchData()
}, [])

const fetchData = async() => {
  const apiResponse = await fetch(RESTAURANT_API_URL) 
  const data = await apiResponse.json()
  // console.log("SWIGGY API FETCHED AND DATA... ")
  // console.log(data)

  const foodImages = data?.data?.cards?.filter(img => img?.card?.card?.gridElements?.
    infoWithStyle?.["@type"] === 
    "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard"
  )
    // console.log("FOOD-IMAGES AARAY FOR UI")
    // console.log(foodImages)


  const resCardData = data?.data?.cards?.filter(res => res?.card?.card?.gridElements?.
    infoWithStyle?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
  )
    // console.log("resCardData All Restaurants -- " )
    // console.log(resCardData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  setImageTable
      (foodImages[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  setListOfRestaurant
      (resCardData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setSearchedRestaurant
      (resCardData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
}

if (onlineStatus === false) return (
    <h1 className=" w-full items-center justify-center font-bold text-red-500 ">LOOK'S LIKE YOU ARE OFFLINE !  TURN ON YOUR DATA </h1> )
  
  {/* FUNCTION TO SERACH RESTAURANTS DYNAMICALLY MAYBE THERE IS SCOPE FOR IMPROVEMENT */}
  const searchedRestaurantData = (searchText, restaurants) => {
    if(searchText !== 0) {
    const  filteredRestaurants = useFilterRestaurants(searchText,restaurants)
      setSearchedRestaurant(filteredRestaurants)
      setErrorMessage("")
      
      if(filteredRestaurants.length === 0) {
        setErrorMessage(`NO RESTAURANT FOUND WITH THIS NAME -- ${searchText}`)
        setSearchedRestaurant(restaurants)
      }
    }
    else{
      setErrorMessage("")
      setSearchedRestaurant(restaurants)
    }
  }  


return searchedRestaurant?.length === 0 ? (
      <h1><ShimmerRestaurant/></h1>
  ) : (
  
<div className="body-container">
  {/* grid-of-images-for-home-image-container */}
  <div className="imageGrid mt-24 relative w-11/12 h-[180px] md:h-[220px] max-w-[1300px] mx-auto my-6 flex flex-col 
    shadow-lg shadow-orange-300 rounded-2xl  bg-white ">
    <div className="upperSec w-full ">
     <div className="flex justify-between ">
      <h2 className=" md:mx-12 font-bold font-poppins text-[20px] md:text-3xl ">What's On Your Mind ? 🤔</h2>
    <div className=" flex lg:mr-6 gap-3 ">
      <button  className="embla__prev" onClick={scrollPrev}
      ><IoChevronBackCircleSharp className=" inline text-2xl lg:text-3xl"/>
      </button>

      <button  className="embla__next " onClick={scrollNext}
      ><IoChevronForwardCircle className=" inline text-2xl lg:text-3xl"/>
      </button>
    </div>
    </div>

      {/* image carousel missing */}
    <div className="embla w-full  " >
      <div ref={emblaRef}
       className="embla__viewport overflow-hidden max-w-[900px] lg:max-w-[1400px]" >
        <div className="flex embla__container max-w-[900px] lg:max-w-[1400px] mx-auto ">
          {imageTable.map((img) => {
            return <img key={img.id}
            src={HOME_LAYOUT_IMG_URL + img.imageId}
            className="embla__slide w-28 lg:w-40 p-3"></img>
          })}
        </div>
      </div>
    </div>
    </div> 

  </div>

  {/* TOP RESTAURANT CONTAINER FEELING NOT NECESSARY TO BUILD */}
  {/* <div className=" embla top-restaurant-grid  relative w-11/12 h-[220px] max-w-[1300px] mx-auto my-6 flex flex-col 
    shadow-lg shadow-orange-300 rounded-2xl  bg-white ">
 
  <div className="flex right-0 mr-6 gap-3 absolute z-10 ">
      <button  className="embla__prev" onClick={scrollPrev}
      ><IoChevronBackCircleSharp className=" inline text-3xl"/>
      </button>

      <button  className="embla__next " onClick={scrollNext}
      ><IoChevronForwardCircle className=" inline text-3xl"/>
      </button>
    </div>
 */}


  {/* <div className="feature-container w-full mt-10 mb-3 md:right-0 flex flex-row space-x-20 justify-center">
    <div className="flex flex-col ">
     <div className="flex w-96  ">
      <input 
        className="w-72 ml-28 md:ml-0  rounded-md text-center md:w-full"
        type="text"
        placeholder= "Search For Restaurant"
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value)
          console.log(e.target.value)
          searchedRestaurantData(e.target.value,listOfRestaurant)}}
      />

      <button
      className="font-bold bg-orange-500 text-white rounded-md p-2 hover:bg-orange-800 border-2 border-orange-400
                hover:transition-all duration-300 "
      onClick={() => {
        searchedRestaurantData(searchText,listOfRestaurant)
      }}>
        Search
      </button>
     </div>
    <div>
    {errorMessage && <div className="text-[12px] md:text-[15px] font-bold mt-2 ml-28 md:ml-0 md:min-w-full overflow-hidden"> NOTHING FOUND FOR :-
        <span className=" h-5 text-red-500  text-lg  max-w-full ">  {searchText}</span>
      </div>}
    </div>
    </div>

      <div className="topResContainer border-2 h-11 rounded-xl border-orange-400 bg-orange-500 p-2 cursor-pointer hover:bg-orange-800 transition-all duration-300 ">
      <button className="  text-white font-sans font-bold hidden md:block "
         onClick={ () => {
          let topRatedRes =  listOfRestaurant.filter((restaurant) => restaurant?.info?.avgRating >= 4.2 )
              return   setSearchedRestaurant(topRatedRes)}}>

            '⭐' TOP RESTAURANTS '⭐'
      </button>
      </div>
  </div> */}

  
  {/* For Mobile  */}
  <h2 className="hidden max-w-[720px] h-7 mx-auto  md:mt-12 mb-6 leading-4 text-center text-2xl font-poppins font-bold shadow-md shadow-orange-400 
                         lg:block">
      Top Restaurants with online food delivery in Your Area</h2>

  <h2 className=" h-7 mx-auto mt-12 mb- leading-4 text-center text-2xl font-poppins font-bold shadow-md shadow-orange-400 
                      md:hidden">
     ⭐ Top Rated Restaurants ⭐</h2>

  <div className="feature-container w-full mt-6 mb-4  md:right-0 flex flex-row space-x-20 justify-center">
    <div className="flex flex-col ">
     <div className="flex w-96  ">
      <input 
        className="w-72 ml-20 md:ml-0  rounded-md text-center md:w-full"
        type="text"
        placeholder= "Search For Restaurant"
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value)
          console.log(e.target.value)
          searchedRestaurantData(e.target.value,listOfRestaurant)}}
      />

      <button
      className="font-bold bg-orange-500 text-white rounded-md p-2 hover:bg-orange-800 border-2 border-orange-400
                hover:transition-all duration-300 "
      onClick={() => {
        searchedRestaurantData(searchText,listOfRestaurant)
      }}>
        Search
      </button>
     </div>
    <div>
    {errorMessage && <div className="text-[12px] md:text-[15px] font-bold mt-2 ml-28 md:ml-0 md:min-w-full truncate"> NOTHING FOUND FOR :-
        <span className=" h-5 text-red-500  text-lg  max-w-full ">  {searchText}</span>
      </div>}
    </div>
    </div>

      <div className="topResContainer border-2 h-11 rounded-xl border-orange-400 bg-orange-500 p-2 cursor-pointer hover:bg-orange-800 transition-all duration-300 ">
      <button className="  text-white font-sans font-bold hidden md:block "
         onClick={ () => {
          let topRatedRes =  listOfRestaurant.filter((restaurant) => restaurant?.info?.avgRating >= 4.2 )
              return   setSearchedRestaurant(topRatedRes)}}>

            '⭐' TOP RESTAURANTS '⭐'
      </button>
      </div>
  </div>

  <div className="all-cards relative w-full md:w-11/12  max-w-[1080px] md:mx-auto flex flex-wrap">
    {searchedRestaurant.map( (restaurant) => (

  <Link className=" mx-auto" to={"/restaurants/" + restaurant?.info?.id}
        key={restaurant?.info?.id}
  >    
    <div  >
      {restaurant?.info?.avgRating >= 4.4? 
       <TopRestaurants restaurantData={restaurant}/> 
                          : 
       <RestaurantCard restaurantData={restaurant}/>}
       
    </div> 
  </Link>
  ))}
  </div> 
</div>) 
}


export default Body;


