import React from "react"
import { Input ,InputGroup,InputRightElement,Button} from '@chakra-ui/react'

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          w={300}
          ml={59}
          mt={5}

        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} mr={55} mt={10}>
            {show ? 'Hide' : 'Show'}
            
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  export default PasswordInput