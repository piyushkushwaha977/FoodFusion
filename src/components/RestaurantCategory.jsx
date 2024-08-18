import ItemList from "./ItemList";
import { FaArrowAltCircleDown,FaArrowAltCircleUp } from "react-icons/fa";

const RestaurantCategory = ({index, data, setShowIndex, showIndex }) => {
  //  console.log("RestaurantCategory Data :: " , data)
 
  return (
    <div className=" bg-[#eaeaea] w-full ">
      <div className="md:w-9/12 mx-4 md:mx-auto my-4 shadow-lg p-4">
      {/* Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowIndex(index)}
        >
        <div>
        <span className="font-bold font-poppins text-sm md:text-xl mr-1">
            {data.title} 
          </span>   
          <span className="font-bold text-sm md:text-2xl text-orange-400">
          ({data.itemCards.length})
          </span>
        </div>
          <span className="text-xl mt-2 md:text-2xl md:mr-5"> 
          {showIndex === index ? <FaArrowAltCircleUp/> : <FaArrowAltCircleDown/> }  </span>
        </div>

        {showIndex === index && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;