import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

function Home () {
    return(
      <>
      <div className="bg-[red] flex flex-col p-4 h-[120px] ">
        <div className="flex items-center">
       <GoHome className="text-white" size={35}></GoHome> <span className="text-white px-4 font-semibold">Home</span>
        </div>
        <div className="flex items-center">
         <IoSearch className="text-white" size={35}></IoSearch> <span className="text-white px-4 font-semibold"> Search </span>
        </div>
      </div>
      </>
    )
}

export default Home