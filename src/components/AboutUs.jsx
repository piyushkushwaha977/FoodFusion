import { GiBloodyStash } from "react-icons/gi";
import { Link } from "react-router-dom";


const  AboutUs = () => {
  return (
    <div className='container-max py-32  text-center min-h-[80vh]'>
    <img
      src='https://www.shopurfood.com/blogs/wp-content/uploads/2022/06/How-to-Retain-in-the-Future-of-Online-Food-Delivery-industry.jpg'
      alt=''
      className='w-full max-w-[480px] mx-auto rounded-lg'
    />

    <div className='w-[90%] max-w-[480px] mx-auto items-center justify-center'>
    <div className=" mx-auto ">
      <Link to="/">
          <div className=" flex ml-5 font-fira-poppins items-center relative font-extrabold text-2xl p-4">
            Food <span className=" text-orange-600 text-3xl">fusion</span>
              <GiBloodyStash className="inline text-2xl"/>
          </div>
          </Link>
      </div>

      <p className=" font-bold font-poppins">
       <span className=" text-black font-bold text-2xl"> Foodfusion</span>  is a food based web application built with React.js ⚛ and 
        <span className='text-orange-800 font-bold font-poppins text-lg underline pr-2'> Swiggy APIs</span>
        for showing my REACT Skills 
      </p>
      {/* <p>
        This project was built 🔧 during the coursework of{' '}
        <a
          className='text-orange-600 font-bold'
          href='https://namastedev.com/namaste-react/'
        >
          Namaste React
        </a>{' '}
        taught by{' '}
        <a
          className='text-orange-600 font-bold'
          href='https://www.linkedin.com/in/akshaymarch7/'
        >
          Akshay Saini
        </a>
      </p> */}

      <h2 className=" font-bold mt-3">THIS WEB-APP IS BUILD BY PIYUSH FOR LEARNING PURPOSE</h2>

    </div>
  </div>
  )
}

export default AboutUs