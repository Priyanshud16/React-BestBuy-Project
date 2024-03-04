import './Avtar.css'
import React from 'react'
import { Avatar, WrapItem,Wrap } from '@chakra-ui/react'
import { Code,Stack } from '@chakra-ui/react'

function AvatarCom(){
return(
  <div id='avatar-container'>
    <div id="avatar-heading">
    <Stack direction='row' id='stack-Avatar'>
  
  <Code  colorScheme='red' children="Ends Sunday." />
  
</Stack>
        <h1>3-Days <span style={{color:"rgb(0,70,190)"}}>Sale</span></h1> 
        
    </div>
  <div id='wrap-avatar'>
    <Wrap>
  <WrapItem className='Wrap'>
   
    <Avatar name='Dan Abrahmov'src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6568/6568347ld.jpg;maxHeight=370;maxWidth=370' className='avatar'   /> 
    
  </WrapItem>
  
  <WrapItem className='Wrap'>
    <Avatar name='Kola Tioluwani' src='https://th.bing.com/th/id/OIP.kX-9MHhyLTHP-fnt-wZN5AHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Kent Dodds' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Ryan Florence' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6511/6511565_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Prosper Otemuyiwa' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534617_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Christian Nwamba' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Segun Adebayo' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533160cv12d.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>

  <WrapItem className='Wrap'>
    <Avatar name='Dan Abrahmov' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6536/6536560_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Kola Tioluwani' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Kent Dodds' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505155cv11d.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Ryan Florence' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546137_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Prosper Otemuyiwa' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6561/6561076cv1d.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Christian Nwamba' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462297_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Segun Adebayo' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441424_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>


  <WrapItem className='Wrap'>
    <Avatar name='Prosper Otemuyiwa' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565475_sd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Christian Nwamba' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522477_rd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
  <WrapItem className='Wrap'>
    <Avatar name='Segun Adebayo' src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547509_rd.jpg;maxHeight=370;maxWidth=370' className='avatar' />
  </WrapItem>
</Wrap>
</div>
  </div>
)
}

export default AvatarCom