import Header from "./header";
import SideBar from "./sidebar";
const Home=()=>{
    return(
        <>
        <div style={{"display":"flex" , "width":"100%" , "height":"100vh","background":"#F5F5F5"}}>
            <SideBar/>
            <Header/>
        </div>
        </>
    )
}
export default Home;