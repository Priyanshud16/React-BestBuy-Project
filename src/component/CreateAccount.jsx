import { MainNavbar } from "./Navbar"
import './CreateAccount.css'
import { Input,Stack,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { PhoneIcon } from "@chakra-ui/icons"
import PasswordInput from "./PasswordInput"
import { Button, ButtonGroup } from '@chakra-ui/react'
function CreateAccount(){

    return(
        <div>
            <MainNavbar/>
            <div id="createAccount">
              <div id="heading">
                <h1>Create an Account</h1>
              </div>
              <Stack spacing={3}>
  <Input placeholder='Enter first Name' w={300} mt={50} ml={20} />
  
  <Input placeholder='Enter last Name' mt={5} w={300}  ml={20} />

  <Input placeholder='Enter Email Address'mt={5} w={300}  ml={20} />
 
</Stack>  
<PasswordInput/> 
<Stack spacing={4}>
  <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.300' mt={8} ml={5} />
    </InputLeftElement>
    <Input type='tel' ml={20} mt={5} placeholder='Phone number' w={300} />
  </InputGroup>
</Stack>
<Button colorScheme='blue' type="button" id="btn" w={200} ml={55.89}>Create Account</Button>    
            </div>
        </div>
    )
}



export default CreateAccount