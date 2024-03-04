









import './Navbar.css';
import React, { useContext, useState } from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SearchBar from './searchbar/searchbaar';
import SearchResultList from './searchbar/searchResultList';
import {Link}  from 'react-router-dom'; // Import Link only once

import { AuthContext } from './AuthContextProvider';

function MainNavbar() {
    const [result, setResult] = useState([]);
    const {add}=useContext(AuthContext)

    return (
        <nav id="nav">
            <div id="logo">
                <h3 className="Best">BEST</h3><h3 className="Best">BUY</h3>
            </div>
            <div id="hamburgerbutton">
            <Menu>
   <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon/>}
    variant='outline'
  />
  <MenuList w={1000}>
    <MenuItem >
     Shop By Department
    </MenuItem>
    <MenuItem >
      Deals
    </MenuItem>
    <MenuItem >
      Supported & Services
    </MenuItem>
    <MenuItem>
      Brands
    </MenuItem>

    <MenuItem>
      Account
    </MenuItem>

    <MenuItem>
      Order Status
    </MenuItem>
    <MenuItem>
      Recently Viewed
    </MenuItem>

    <MenuItem>
     Saved Items
    </MenuItem>
    <MenuItem>
      Top Deals
    </MenuItem>
    <MenuItem>
      Deal of the Day
    </MenuItem>

    <MenuItem>
      Yes, Best Buy Sells That
    </MenuItem>
    <MenuItem>
      My Best Buy Memberships
    </MenuItem>
    <MenuItem>
      Credit Cards
    </MenuItem>
    <MenuItem>
     Gift Card
    </MenuItem>
    <MenuItem>
      Gift Ideas
    </MenuItem>
  </MenuList>
</Menu>
            </div>
            <div className="searchbar">
                <div id="input">
                    <SearchBar setResult={setResult} />
                    <SearchResultList result={result} />
                </div>
            </div>

            <div id="cart">
                <img width="50" height="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1" />
                <h3 id='cartHead'><Link to='/Cart'> Cart{add}</Link></h3>
            </div>
        </nav>
    );
}

function UpperNavBar() {
    return (
        <div id="navup">
            <button>Yardbird</button>
            <button>Best Buy Outlet</button>
     <button>Best Buy Business</button>
      <button>Shop with an Expert</button>
            {/* Other buttons */}
        </div>
    );
}

function NavDown() {
    return (
        <div id="navdown">
            <button>Top Deals</button>
            <Link style={{color:"white",marginLeft:"20px" ,fontSize:"10px"}} to='/ProductList'><button>Deal of the day </button></Link>
            {/* Other buttons */}
            <button>Yes, Best Buy Sells That</button>
  <button>My Best Buy Memberships</button>
     <button>Credit Cards</button>
     <button>Gift Cards</button>
     <button>Gift Ideas</button>
  <Link to="/loginpage" style={{color:"white",marginLeft:"20px" ,fontSize:"10px"}}><button>Account</button></Link> 
        </div>
    );
}

export { MainNavbar, UpperNavBar, NavDown };



























































// import './Navbar.css';
// import React, { useState } from 'react';

// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuItemOption,
//     MenuGroup,
//     MenuOptionGroup,
//     MenuDivider,
//     IconButton,
//     Link,
    
//   } from '@chakra-ui/react'
// import {    HamburgerIcon, } from '@chakra-ui/icons';
// import SearchBar from './searchbar/searchbaar';
// import SearchResultList from './searchbar/searchResultList';
// import { Link } from 'react-router-dom'; 

// function MainNavbar() {
//   const [result,setResult]=useState([])
//   return (
//     <nav id="nav">
//       <div id="logo">
//         <h3 className="Best">BEST</h3><h3 className="Best">BUY</h3>
//       </div>
//       <div id="hamburgerbutton">
//         {/* <h3 id="Menu">Menu</h3> */}
//         <Menu>
//   <MenuButton
//     as={IconButton}
//     aria-label='Options'
//     icon={<HamburgerIcon/>}
//     variant='outline'
//   />
//   <MenuList w={1000}>
//     <MenuItem >
//      Shop By Department
//     </MenuItem>
//     <MenuItem >
//       Deals
//     </MenuItem>
//     <MenuItem >
//       Supported & Services
//     </MenuItem>
//     <MenuItem>
//       Brands
//     </MenuItem>

//     <MenuItem>
//       Account
//     </MenuItem>

//     <MenuItem>
//       Order Status
//     </MenuItem>
//     <MenuItem>
//       Recently Viewed
//     </MenuItem>

//     <MenuItem>
//      Saved Items
//     </MenuItem>
//     <MenuItem>
//       Top Deals
//     </MenuItem>
//     <MenuItem>
//       Deal of the Day
//     </MenuItem>

//     <MenuItem>
//       Yes, Best Buy Sells That
//     </MenuItem>
//     <MenuItem>
//       My Best Buy Memberships
//     </MenuItem>
//     <MenuItem>
//       Credit Cards
//     </MenuItem>
//     <MenuItem>
//      Gift Card
//     </MenuItem>
//     <MenuItem>
//       Gift Ideas
//     </MenuItem>
//   </MenuList>
// </Menu>
//       </div>
//       <div className="searchbar">
//       <div id="input">
//         {/* <input type="text" placeholder='what can help you to find today?' /> */}

//         <SearchBar setResult={setResult}/>
//        <SearchResultList result={result}/> 
       
//       </div>
//       </div>

//       <div id="cart">
//         <img width="50" height="20" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1" />
//         <h3 id='cartHead'>Cart</h3>
//       </div>
//     </nav>
//   );
// }

// function UpperNavBar() {
//   return (
//     <div id="navup">
//       <button>Yardbird</button>
//       <button>Best Buy Outlet</button>
//       <button>Best Buy Business</button>
//       <button>Shop with an Expert</button>
//     </div>
//   );
// }

// function NavDown(){
// return(
//     <div id="navdown">
//     <button>Top Deals</button>
    
//     <Link to='/ProductList'><button>Deal of the day </button></Link>
//     <button>Yes, Best Buy Sells That</button>
//     <button>My Best Buy Memberships</button>
//     <button>Credit Cards</button>
//     <button>Gift Cards</button>
//     <button>Gift Ideas</button>
//   </div>
// )
// }

// export { MainNavbar, UpperNavBar,NavDown };
