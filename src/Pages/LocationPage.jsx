import { TbCurrentLocation } from "react-icons/tb";

function LocationPage() {
  return (
    <div className=' w-full h-screen '>
        <div className=' text-transparent bg-gradient-to-t from-red-800 to-purple-900 bg-clip-text  text-4xl  md:text-7xl text-center mt-[10rem]'>Unable to Access Your Current Location
        
        <div className=' mt-10 text-2xl md:text-5xl text-transparent bg-gradient-to-t from-neutral-800 to-teal-900 bg-clip-text'>
            Sorry for the Inconvienence
        </div>
    </div>

    <div className=" flex justify-center items-center mt-12 md:mt-20">
      <TbCurrentLocation className=" text-orange-600 text-5xl text-center"/>
    </div>
    </div>
  )
}

export default LocationPage