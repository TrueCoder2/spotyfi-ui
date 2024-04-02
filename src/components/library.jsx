import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiLibrary } from "react-icons/bi";
import artist from '../data/artist.json'

function Library () {
    return(
          <>
          <div className="bg-green-400 flex flex-col mt-2 h-auto overflow-hidden">
            <div className="flex">
                <div className="flex"> <BiLibrary /> <span>Your Library</span> </div>
                <div className="flex"> <span> <FaPlus /> </span> <span> <FaArrowRight /> </span> </div>
            </div>

            <div>

            </div>

            <div className="flex flex-col overflow-y-scroll"> 
               {artist.map((k) => <div key={k.id}> <span > <img src={k.image}  className="rounded-full object-cover h-[40px] w-[40px]"/> </span> <span> {k.name} </span> </div>)}
            </div>
          </div>
          </>
    )
}

export default Library