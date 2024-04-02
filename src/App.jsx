import Content from "./components/content"
import Nav from "./components/nav"
import Sidebar from "./components/sidebar"
import Pllayer from "./components/pllayer"


function App() {
 

  return (
    <>
     <div className="main-container bg-black h-screen w-screen flex flex-col">
     
      <div className="h-5/6 w-full flex rounded-2xl m-2 ">
      <Sidebar />
      <Content>
       
      </Content>
      </div>

      <div className="h-1/6 w-full">
          <Pllayer></Pllayer>
      </div>
     </div>
    </>
  )
}

export default App
