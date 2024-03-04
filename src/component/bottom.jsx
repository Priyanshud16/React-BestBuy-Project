import './bottom.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    color,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'

function Bottom(){
return(
    <div id='bottom'>

        <div id="bottomMain">
            <div id='question'>
            <img src="https://th.bing.com/th/id/OIP.YYFXyk73_0IjAmhhi7WL5wHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <p>Visit our Support Center</p>
            </div>

            <div id='parcel'>
             <img src="https://th.bing.com/th/id/OIP.g4HFD5txLn3vRkQaD43kIwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             <p>Check Your Order Status</p>
            </div>
            <div id='parcelTruck'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/loading-truck.png" alt="loading-truck"/>
              <p style={{color:"blue"}}>Shipping,Delivery & Store Pickup</p>
            </div>
            <div id="return">
            <img width="100" height="100" src="https://img.icons8.com/ios/50/exchange.png" alt="exchange"/>
            <p style={{color:"blue"}}>Return and Exchange</p>
            </div>
        </div>

        <div id="accordian">
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'  >
         Order & Purchase
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className='ac' pb={4}>
    <h3>Check order status</h3>
     <hr />
     <br />
     <h3>Shipping,Delivery & Pickup</h3>
     <hr />
     <br />
     <h3>Returns & Exchanges</h3>
     <hr />
     <br />
     <h3>Price Match Guarantee</h3>
     <hr />
     <br />
     <h3>Products Recalls</h3>
     <hr />
     <br />
     <h3>Trade-in Program</h3>
     <hr />
     <br />
     <h3>Gifts Card</h3>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Payment Options
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='ac'>
    <h3>My Best Buy Credit Card</h3>
    <hr />
    <br />
    <h3>Pay your Bills at Citybank</h3>
    <hr />
    <br />
    <h3>Lease to Own</h3>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Support & Services
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='ac'>
     <h3>Visit our Support Center</h3>
     <hr />
     <br />
     <h3>Shop with an Expert</h3>
     <hr />
     <br />
     <h3>Schedule a Service</h3>
     <hr />
     <br />
     <h3>Manage an Appointment</h3>
     <hr />
     <br />
     <h3>Protection and Support Plans</h3>
     <hr />
     <br />
     <h3>Haul Away & Recycling</h3>
     <hr />
     <br /> 
     <h3>Contact Us</h3>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Rewards & Membership
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='ac'>
      <h3>My Best Buy Memberships</h3>
      <hr />
      <br />
      <h3>View Point and Certificates</h3>
      <hr />
      <br />
      <h3>Member Offers</h3>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
       Partnerships
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='ac'>
     <h3>Affiliate Program</h3>
     <hr />
     <br />
     <h3>Influencer Network</h3>
     <hr />
     <br />
     <h3>Advertise with Us</h3>
     <hr />
     <br />
     <h3>Developers</h3>
     <hr />
     <br />
     <h3>Best Buy Health</h3>
     <hr />
     <br />
     <h3>Best Buy Education</h3>
     <hr />
     <br />
     <h3>Best Buy Business</h3>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      About Best Buy
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='ac'>
     <h3>Corporate Information</h3>
     <hr />
     <br />
     <h3>Carriers</h3>
     <hr />
     <br />
     <h3>Corporate Responsibility</h3>
     <hr />
     <br />
     <h3>Sustainability</h3>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </div>
        
        <div id="signAndcreate">
          <button style={{color:"blue",marginLeft:"50px"}}>Sign in or Create Account</button>
          <hr />
          <hr />

        </div>

        <div id="emailId">
        
          <h3 style={{fontWeight:"bolder"}}>Get the latest deals and more.</h3>
          
          <input type="text" name="" id="" placeholder='Enter Your Email Address' />
          <Button colorScheme='blue' w={200}>Button</Button>
          
        </div>

        <div id='bottombtn' style={{display:"flex"}}>
         <p>Accessibility </p> 
         <p>Terms & <br /> Conditions</p> 
         <p>Privacy</p>
         <p>Interest-Based <br /> Ads</p>
         <p>State Privacy <br /> Rights</p>
         <p>Health Data <br /> Privacy</p>
         <p>Do Not Sell/Share My Personal <br /> Information</p>
         <p>Limit Use of My Sensitive Personal <br /> Information</p>
         <p>Targeted Advertising Opt <br /> Out</p>
         <p>CA Supply Chain Transparency <br /> Act</p>

        </div>
        <div id="lastbottom">
          <p>In-store pricing may vary. Prices and offers are subject to change. © 2024 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.</p>
        </div>
    </div>
)
}

export default Bottom