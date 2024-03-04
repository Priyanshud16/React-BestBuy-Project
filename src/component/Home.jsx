import { MainNavbar, NavDown, UpperNavBar } from "./Navbar";
import { Banner, FetchOneView, LaptopFetch, SignAndFetch, TopDealsBanner } from "./body";
import Bottom from "./bottom";
import AvatarCom from "./searchbar/Avatar";


function Home(){
    return(
        <>
      
        <UpperNavBar/>
      <MainNavbar/>
      <NavDown/>
    <AvatarCom/>
      <Banner/>
      <FetchOneView/>
      <SignAndFetch/>
      <TopDealsBanner/>
      <LaptopFetch/>
      <Bottom/>

        </>
    )
}

export default Home;