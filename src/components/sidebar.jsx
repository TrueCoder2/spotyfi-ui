import Home from "./home"
import Library from "./library"

function Sidebar(){
    return( 
        <>
        <div className="side-container h-full bg-[#121212] w-1/4 mr-2 rounded-lg">
            <Home  />
            <Library />
        </div>
        </>
    )
    
    }
    
    export default Sidebar