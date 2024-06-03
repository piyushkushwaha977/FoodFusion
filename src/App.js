import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Help from "./components/Help";
import RestaurantMenu from "./components/RestaurantMenu"
import HomePage from "./Pages/HomePage";
import ContactUs from "./components/ContactUs";
import {  createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import CartStore from "./redux-store/CartStore";
import CartPage from "./Pages/CartPage";
import {Toaster} from "react-hot-toast";



const AppLayout = () => {
    return ( 

    <Provider store={CartStore}>     
      <div className=" bg-[#eaeaea]  overflow-x-hidden ">
        <Toaster/>
        <Header/>
        <Outlet/>
      
      </div>
   </Provider>

    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/help",
                element: <Help/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            }
            
        ],
        errorElement: <Error/>
    }
])


                                      
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


