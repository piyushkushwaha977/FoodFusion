import { useState, useEffect } from "react";
import {RESTAURANT_API , FODD_FIRE_API} from "./constant"

const useRestaurantCard = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [searchedRestaurant, setSearchedRestaurant] = useState([])

    useEffect(() => {
      fetchData()
  }, [])

const fetchData = async() => {
  let response = await fetch( FODD_FIRE_API );
   
    const data = await response.json()
    console.log("SWIGGY API FETCHED AND DATA... ")
    console.log(data)

    setListOfRestaurant
      (data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchedRestaurant
    (data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  return listOfRestaurant , searchedRestaurant
}

export default useRestaurantCard;