
import { useDispatch } from "react-redux";
import { MENU_IMAGE_CDN_URL } from "../utils/constant";
import {  addToCart } from "../redux-store/CartSlice";
import toast from "react-hot-toast";

const ItemList = ({ items }) => {

  console.log("Items from Itemlist " , items)
  
    const dispatch = useDispatch()
  // const shorDesc = items?.item.card?.info?.description.substring(0,200)
  // console.log("shortDesc" ,shorDesc)
   
    const handleAddItemToCart = (item) => {
        dispatch(addToCart(item))
        toast.success("Added To Cart")
    }

    return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 md:m-2 border-gray-300 border-b-2 text-left flex justify-between "
        >
          <div className=" w-full  md:w-9/12 ">
            <div className="  md:py-2 ">
              <span className="hidden md:block font-bold font-poppins text-[14px] md:text-xl">{item.card.info.name}</span>
              <span className="font-bold font-poppins text-[14px] md:hidden ">{item.card.info.name.substring(0,15)}</span>
              <span className="inline">
                { item?.card?.info?.finalPrice ?  
                 <strike className="  hidden  md:block">  ₹{item.card.info.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
                </strike>
                  :
                <span className="font-bold font-poppins text-[12px] md:text-xl text-red-600">
                   ₹ {item.card.info.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
                 </span>} {" "}
                {item?.card?.info?.finalPrice && 
                <span className=" font-bold font-poppins text-[12px] md:text-xl text-red-600">
                 ₹ {item?.card?.info?.finalPrice && item?.card?.info?.finalPrice / 100 }
                 </span>}
              </span>
            </div>
            <p className=" hidden md:block font-poppins  text-xs">{item?.card?.info?.description}</p>
            <p className="text-[10px] md:hidden font-poppins ">{item?.card?.info?.description?.substring(0,70)}</p>
          </div>
          <div className=" relative  md:w-3/12">
          <div className="w-full z-20 absolute ml-11 mx-aut0 md:left-0 bottom-0 md:-mb-1 md:ml-[74px]">
              <button
                className="flex justify-between font-poppins md:w-[60px] p-1 md:p-2 md:pl-3
               border text-white bg-slate-900 opacity-80 rounded-lg
                hover:text-orange-500 hover:transition-all duration-300"
                onClick={() => handleAddItemToCart(item)}
              >
                Add
              </button>
            </div>
            <img loading="lazy"
            src={MENU_IMAGE_CDN_URL + item?.card?.info?.imageId}
            onError={(event) =>
                  (event.target.style.display = "none")
             }
             className=" -z-10 w-[100px] min-h-[85px] md:w-[160px] md:min-h-[120px] overflow-hidden aspect-video object-cover block rounded-md
              shadow-lg shadow-black ml-6" />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

