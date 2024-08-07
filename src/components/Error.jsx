import { useRouteError } from "react-router-dom"
import errorImage from "../../assests/errror.image.jpg"


const Error = () => {

    const err = useRouteError()
    // console.log(err , "from useRouteError")
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center bg-[#ecf0f1] overflow-y-hidden">
          <img
            className="w-100 h-72"
            src={errorImage}
            alt="error image"
          />
          <span className="text-lg font-fira-code  font-bold">{err.status}</span>
          <span className="mt-2 text-lg font-medium font-fira-code">
            {err.statusText}
          </span>
          <p className="mt-2 text-lg font-medium font-fira-code">{err.data}</p>
        </div>
      );
    };

export default Error;