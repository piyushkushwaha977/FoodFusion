import { useState, useEffect } from "react"
import { MENU_API } from "./constant"

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenuDetails()
    },[])

    const fetchMenuDetails = async() => {

        const apiResponse = await fetch(process.env.RESTAURANTS_API_KEY + MENU_API + resId)
        const data = await apiResponse.json()

        //console.logssss
        // console.log("Data for MENU List Items")
        // console.log(data)

        // Set Data to State Variable
        setResInfo(data)
    }

    return resInfo
}

export default useRestaurantMenu;