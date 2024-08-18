const BodyShimmer = () => {
    return (
      <div className="w-full h-screen mt-36 ">
        <div className="flex flex-wrap max-w-[1080px] mx-auto justify-center" data-testid="shimmer">
          <div className="hero shadow-lg m-3 mt-4 p-3 w-full h-48"></div>
          {Array(16)
            .fill([])
            .map((e, index) => (
              <div key={index} className="shadow-lg m-3 p-3 w-72 h-72">
                <div className="w-full h-1/2 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
                <div
                  className="w-[90%] h-[10%] mt-3 border rounded-sm
                 bg-64 custom-linear-gradient animate-shimmer "
                ></div>
                <div className="w-[70%] h-[7%]  mt-3 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
                <div className="w-[70%] h-[7%]  mt-3 border rounded-sm bg-64 custom-linear-gradient animate-shimmer"></div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  export default BodyShimmer;